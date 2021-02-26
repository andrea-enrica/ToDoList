let loadingPage = () => {
    let content = document.getElementById('content');
    let container = document.createElement('div');
    container.id = ('container');
    
    let title = document.createElement('div');
    title.id = ('title');

    let iconTitle = document.createElement('IMG');
    iconTitle.id = ('iconTitle');
    iconTitle.setAttribute('src', '/home/enrica/Documents/work-space/the_odin_project/Javascript/ToDoList/dist/to-do.svg');

    let motto = document.createElement('h5');
    motto.innerText = '\“Sometimes our stop-doing list needs to be bigger than our to-do list.\”\― Patti Digh';
    motto.id = ('motto');

    let demo = document.createElement('button');
    demo.innerText = 'GET STARTEDwebp';
    demo.id = ('demoBttn');

    title.appendChild(iconTitle);
    container.appendChild(title);
    container.appendChild(motto);
    container.appendChild(demo);
    content.appendChild(container);
    return {container};
    
};

export{loadingPage};