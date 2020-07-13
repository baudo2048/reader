export default function storeClient(){
    document.json('data').then(data=>{
        document.store = data
    })

}