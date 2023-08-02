function TodoList({children}){
    return(
        <ul>
            {children}

        </ul>
    );
}

export {TodoList};

// en este caso, pudimos usar children porque react le asigna "children" a todo lo que está dentro de un componente 
// que en este caso era el TodoItem