export default function deleteIfAnyCat(container){
    if (container.children.length){
        container.removeChild(container.children[0])
    }
}