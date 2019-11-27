class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class ArbolBinario{
    constructor(){
        this.root = null;
    }

    insertar(data){
        let nodo = new Node(data);
        if(this.root == null){
        this.root = nodo;
        
    }else{
        this.insertarNodo(this.root, nodo)
        }
    }

    insertarNodo(root, newNode){
        if(newNode.data < root.data){
            if(root.left == null){
                root.left = newNode;
            }else{
                this.insertarNodo(root.left, newNode);
            }
        }else if(newNode.data > root.data){
                if(root.right == null){
                    root.right = newNode;
                }
        }else{
            this.insertarNodo(root.right, newNode);
        }
    }

    ObtenerRaiz(){
        return this.root;
    }


    //Métodos de búsqueda
    
}