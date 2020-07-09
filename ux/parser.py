import sys
import os
import math

inFolder = "C:/Users/u416183/lab/work/node/htmlLang/dist/ux/"
outFolder = "C:/Users/u416183/lab/work/node/htmlLang/dist/"
scriptFolder = "C:/Users/u416183/lab/work/node/htmlLang/dist/script/"

def getTokenType(t):
	sentinel = t[0]
	if (sentinel == "."):
		return "attr"
	if (sentinel == "-"):
		return "style"
	if (sentinel == "'"):
		return "text"
	if (sentinel == "\\"):
		return "include"
	return "elem"

def isImport(t):
	sentinel = t[0]
	if (sentinel== "*"):
		return True
	else:
		return False

def countTabs2(l):
	count=0
	for c in l:
		if(c=="\t"):
			count=count+1
	return count

def countTabs(l):
	count = int((len(l) - len(l.lstrip(' ')))/4)
	return count

def leadingTabs(n):
	lt = ""
	for x in range(0,n):
		lt = lt + "\t"
	return lt

def parseInclude(fileName):
	# PRIMO PASSAGGIO
	## Leggo il file la prima volta e sostituisco gli include e salvo in un file intermedio
	file1 = open(inFolder + fileName + '.ux', 'r')
	fileOut = open(inFolder + fileName + '.intermediate.ux', 'w')

	Lines = file1.readlines()
	for line in Lines:
		currTabNum = countTabs(line)
		tokens = line.split()
		if (len(tokens)==0):
			fileOut.write("\n")
			continue	

		leadToken = tokens[0]
		tokenType = getTokenType(leadToken)

		if (tokenType == "include"):

			fileInclude = open(inFolder + tokens[1], 'r')
			LinesInclude = fileInclude.readlines()
			for lineInclude in LinesInclude:
				fileOut.write(leadingTabs(currTabNum) + lineInclude)
		else:
			fileOut.write(line)

def bonificaImport(fileName):    # Porto in testa gli importo che erano presenti nel file .script importato
	file1 = open(inFolder + fileName + '.intermediate.js', 'r')
	fileOut = open(outFolder + fileName + '.js', 'w')

	Lines = file1.readlines()

	importArr = []
	codeArr = []
	for line in Lines:
		tokens = line.split()
		if (len(tokens)==0):
			continue

		if (tokens[0]=='import'):
			importArr.append(line)
		else:
			codeArr.append(line)

	for i in importArr:
		fileOut.write(i)
	
	for c in codeArr:
		fileOut.write(c)

	file1.close()
	fileOut.close()
	os.remove(inFolder + fileName + '.intermediate.js')

def writeAttribute(t, f, c, ns):	# t = tokens    f = fileOut   c = currentVarName    ns = namespace
	if(t[0][1:3]=="on"):
		val = t[1]
		for i in range(2, len(t)):
			val = val + " " + t[i]
		f.append("{}{} = {};".format(c, t[0], val))
		f.append("\n")
	else:
		val = t[1]
		for i in range(2, len(t)):
			val = val + " " + t[i] 
		if(ns=="0"):	
			f.append("{}{} = '{}';".format(c, t[0], val))
		else:
			f.append("{}.setAttribute('{}','{}');".format(c, t[0][1:], val))
		f.append("\n")	

def writeText(t, f, c, n):      # t = tokens    f = fileOut   c = currentVarName    n = count
	# TRASFORMARE QUESTO CASO IN NODE ELEMENT!!!
	val = t[0][1:len(t[0])]
	for i in range(1, len(t)):
		val = val + " " + t[i]
	f.append("var textNode_{} = document.createTextNode('{}');".format(str(n), val))
	f.append("\n")
	f.append("{}.append(textNode_{});".format(c, str(n)))
	f.append("\n")

def writeStyle(t, f, c):		# t = tokens    f = fileOut   c = currentVarName
	val = t[1]
	for i in range(2, len(t)):
		val = val + " " + t[i]
	f.append("{}.style{} = '{}';".format(c, t[0].replace("-","."), val))
	f.append("\n")

def writeImport(t, f, ct):		# t = tokens    f = fileOut   ct = currTabNum
	inFolder = "C:/Users/u416183/lab/work7py/htmlLang/htmlLang/app/ux/"
	outFolder = "C:/Users/u416183/lab/work7py/htmlLang/htmlLang/dist/"
	scriptFolder = "C:/Users/u416183/lab/work7py/htmlLang/htmlLang/app/script/"
	fileImport = open(inFolder + t[1], 'r')
	LinesImport = fileImport.readlines()
	for lineImport in LinesImport:
		f.write(leadingTabs(ct) + lineImport)

def parse(fileName):
	ns = {
		"svg": "1",
		"circle": "1",
		"rect": "1"
	}

	importArr = []
	codeArr = []

	# PRIMO PASSAGGIO: GLI INCLUDE
	#parseInclude(fileName)

	
	# SECONDO PASSAGGIO
	fileIs = inFolder + fileName  + '.ux'
	print("file1 is + {}".format(fileIs))
	file1 = open(inFolder + fileName  + '.ux', 'r') 
	fileOut = open(inFolder + fileName + '.intermediate.js', 'w')

	Lines = file1.readlines() 
	
	count = 0
	currentVarName = ""
	currentNS = "0"
	appends = []
	currTabNum = 0
	prevTabNum = 0
	isFirstElement = True
	firstElement = ''
	for line in Lines:
		tokens = line.split()
		if (len(tokens)==0):
			continue
		
		leadToken = tokens[0]
		tokenType = getTokenType(leadToken)
		
		currTabNum = countTabs(line)

		if (tokenType=="elem"):
			#currentVarName = writeElement(tokens, fileOut) ...
			if (len(tokens)==1):
				if(isImport(leadToken)):
					varName = leadToken[1:] + "_" + str(count)
				else:
					varName = leadToken + "_" + str(count)
			else:
				if(isImport(leadToken)):
					varName = tokens[1]
				else:
					varName = tokens[1]
			
			if(isFirstElement):
				isFirstElement = False
				firstElement = varName
				codeArr.append("export default function {}() ".format(fileName))
				codeArr.append("{")
			
			currentVarName = varName   # non funzia da sistemare

			if( (ns.get(tokens[0],"0")) =="0"): 
				currentNS = "0"
			else:
				
				currentNS = "1"

			codeArr.append("\n")
			if(isImport(leadToken)):
				importArr.append("import {}_ from './{}.js';".format(varName, leadToken[1:]))
				codeArr.append("var {} = {}();".format(varName, varName + '_'))
			else:
				if( (ns.get(tokens[0],"0")) =="0"): 
					codeArr.append("var {} = document.createElement('{}');".format(varName, tokens[0]))
				else:
					codeArr.append("var {} = document.createElementNS('http://www.w3.org/2000/svg', '{}');".format(varName, tokens[0]))
			codeArr.append("\n")
			
			## APPENDS			
			if(prevTabNum>currTabNum):
				#SVUOTO
				print("svuoto")
				diff = prevTabNum - currTabNum
				for x in range(0,diff):
					for child in appends[len(appends)-1]:
						prevLiv = appends[len(appends)-2]
						varEl = prevLiv[len(prevLiv)-1]
						codeArr.append("{}.appendChild({});".format(varEl, child))
						codeArr.append("\n")
						codeArr.append("\n")
					del appends[len(appends)-1]
			
			if(currTabNum>len(appends)-1):
				appends.append([])
			appends[currTabNum].append(varName)

		if (tokenType=="attr"):
			writeAttribute(tokens, codeArr, currentVarName, currentNS)
			
		if (tokenType=="text"):
			writeText(tokens, codeArr, currentVarName, count)
			
		if (tokenType=="style"):
			writeStyle(tokens, codeArr, currentVarName)
	
		prevTabNum = currTabNum
		count=count+1


	#SVUOTO
	print("svuoto final - {}".format(appends))
	while(len(appends)>1):
		for child in appends[len(appends)-1]:
			prevLiv = appends[len(appends)-2]
			varEl = prevLiv[len(prevLiv)-1]
			codeArr.append("{}.appendChild({});".format(varEl, child))
			codeArr.append("\n")
			codeArr.append("\n")
		del appends[len(appends)-1]

	## PRIMA DI CHIUDERE LO SCRIPT COPIO comp.script.js se esiste
	if(os.path.exists(scriptFolder + fileName + '.script.js')):
		fileScript = open(scriptFolder + fileName + '.script.js', 'r')
		LinesScript = fileScript.readlines()
		for lineScript in LinesScript:
			codeArr.append(lineScript)

	codeArr.append("\n");
	codeArr.append("return {};".format(firstElement))
	codeArr.append("}")

	## Scrivo su file
	for i in importArr:
		fileOut.write(i)
	
	fileOut.write('\n');

	for l in codeArr:
		fileOut.write(l)

	## Rimuovo i files intermedi
	file1.close()
	fileOut.close()
	#os.remove(fileName  + '.intermediate.ux') 

##
parse(sys.argv[1])
bonificaImport(sys.argv[1])

