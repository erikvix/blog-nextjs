export const apiUrl = 'https://www.jsonkeeper.com/b/K583'

export async function getPosts() {
    const response = await fetch(`${apiUrl}`, {cache: "no-store"})
    const data = await response.json()
    return data.docs;
}


export async function getPost(id: string){
    const posts = await getPosts();
    return posts.find((post: any) => post.id === id)
}