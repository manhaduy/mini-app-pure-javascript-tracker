/*
const descriptionInput = document.getElementById('description');
const buttonAdd = document.getElementById('buttonAdd');

buttonAdd.addEventListener('click', function handleAdd() {
  console.log(descriptionInput.value)
});
*/
let dataIssues = [];
const error = document.getElementById("error");
const buttonAdd = document.querySelector("#buttonAdd");
const descriptionInput = document.querySelector("#description");
const authorInput = document.querySelector("#author-select");
const severityInput = document.querySelector("#severity-select");
const issuesContainer = document.getElementById("issues");
const countValue = document.querySelector(".count-value");
let issueCount = 0;

const displayCount = (issueCount) => {
    countValue.innerText = issueCount;
};


const renderIsssue = (dataSource = []) => {
    // render html dom
    // <div class="card">
    //     <div class="card_header">
    //      <span class="issueName">sunny</span>
    //     </div>
    //     <div class="card_content">
        //     <p>dasdsa</p>
        //     <div class="card_severity">low</div>
        //     <div class="card_button">
        //         <button type="button" class="button button-close">Close</button>
        //         <button type="button" class="button button-delete">Delete</button>
        //     </div>
    //     </div>
    // </div>


    console.log('dataSource:', dataSource)
    // reset empty before render
    issuesContainer.innerHTML = '';

    dataSource.forEach(issue => {
        // create dom card
        const divCard = document.createElement('div');
        divCard.setAttribute('class', 'card');

        // create dom card_header
        const divHeader = document.createElement('div');
        // set attribute
        divHeader.setAttribute('class', 'card_header');

        const spanIssueName = document.createElement('span');
        spanIssueName.setAttribute('class', 'issueName');
        spanIssueName.innerHTML = issue.title;

        // demo to add event click
        const buttonDeleteHeader = document.createElement('button');
        buttonDeleteHeader.setAttribute('type', 'button');
        buttonDeleteHeader.setAttribute('class', 'button button-delete');
        buttonDeleteHeader.setAttribute('onclick', `deleteIssue(${issue.id})`);
        buttonDeleteHeader.innerHTML = 'Delete';

        divHeader.appendChild(spanIssueName);
        divHeader.appendChild(buttonDeleteHeader);

        divCard.appendChild(divHeader);

        // append to root
        issuesContainer.appendChild(divCard);
    })

}

renderIsssue(dataIssues);

function deleteIssue(issueId) {
    const clonedIssues = [...dataIssues];
    const newIssues = clonedIssues.filter(issue => issue.id !== issueId);

    // update dataIssues   
    dataIssues = newIssues;
    renderIsssue(newIssues);

    console.log('deleteIssue', issueId);
    // xu ly issue data
}

function addIssue() {
    const issueDescription = descriptionInput.value.trim();
    const issueName = authorInput.value.trim();
    const issueSeverity = severityInput.value.trim();
    error.style.display = "none";  

    const issueItem = {
        id: Date.now(),
        title: `Issue ${Date.now()}`,
        description: issueDescription,
        author: issueName,
        severity: issueSeverity
    }

    // push new issue into dataIssues
    dataIssues.push(issueItem);

    console.log('addIssue', issueItem)

    renderIsssue(dataIssues);
}

buttonAdd.addEventListener('click', addIssue);


// code of Man
// const addIssue = () => {
//     const issueDescription = descriptionInput.value.trim();
//     const issueName = authorInput.value.trim();
//     const issueSeverity = severityInput.value.trim();
//     error.style.display = "none";
//     if(!issueDescription){
//         setTimeout(()=>{
//             error.style.display="block";
//         }, 200);
//         return;
//     }

    
//     const issue = `<div class="card">
//     <div class="card_header">
//     <span class="issueName">${issueName}</span>
//     </div>
//     <div class="card_content">
//       <p>${issueDescription}</p>
//       <div class="card_severity">${issueSeverity}</div>
//       <div class="card_button">
//         <button type="button" class="button button-close">Close</button>
//         <button type="button" class="button button-delete">Delete</button>
//       </div>
//     </div>`;
    
// /*
//     const task = `<div class="task">
//     <input type="checkbox" class="task-check">
//     <span class="taskname">${taskName}</span>
//     <button class="edit">
//     <i class="fa-solid fa-pen-to-square"></i>
//     </button>
//     <button class="delete">
//     <i class="fa-solid fa-trash"></i>
//     </button>
// </div>`;
// */
//     issuesContainer.insertAdjacentHTML("beforeend", issue);

//     const deleteButtons = document.querySelectorAll(".button-delete");
//     deleteButtons.forEach((button) =>{
//         button.onclick = () => {
//             button.parentNode.parentNode.parentNode.remove();
//             issueCount -= 1;
//             displayCount(issueCount);
//         };
//     });

//     issueCount += 1;
//     displayCount(issueCount);
//     descriptionInput.value = "";
// };
/*
buttonAdd.addEventListener('click', function handleAdd() {
    console.log(descriptionInput.value)
    console.log(authorInput.value)
    console.log(severityInput.value)
  });

*/
// buttonAdd.addEventListener("click", addIssue);

window.onload = () => {
    issueCount = 0;
    displayCount(issueCount);
    descriptionInput.value = "";
};