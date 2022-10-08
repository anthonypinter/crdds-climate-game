let answeredYes = 2;
let count = 0;
const nextButton = document.querySelector('#next');
const yesButton = document.querySelector('#yesButton');
const noButton = document.querySelector('#noButton');
const choices = document.querySelector('.choices');

nextButton.addEventListener('click', reset => {
    sessionStorage.clear();
    count++;
    const clear = document.querySelector('.answerBox');
    clear.innerHTML = "";
});

class Poll {
    constructor(root) {
        this.root = root;
        this.selected = sessionStorage.getItem('answer');
        this.endpoint = 'http://localhost:3000/';
        this._refresh();
    }

    async _refresh() {
        const response = await fetch(this.endpoint);
        const data = await response.json();
        const placement = document.querySelector('.answerBox');
        let yes, no;
        switch(count) {
            case 0:
                yes = ((data.q1.Yes / (data.q1.No + data.q1.Yes))*100).toFixed(0);
                no = ((data.q1.No / (data.q1.No + data.q1.Yes))*100).toFixed(0);
                break;
            case 1:
                yes = ((data.q2.Yes / (data.q2.No + data.q2.Yes))*100).toFixed(0);
                no = ((data.q2.No / (data.q2.No + data.q2.Yes))*100).toFixed(0);
                break;
            case 2:
                yes = ((data.q3.Yes / (data.q3.No + data.q3.Yes))*100).toFixed(0);
                no = ((data.q3.No / (data.q3.No + data.q3.Yes))*100).toFixed(0);
                break;
            case 3:
                yes = ((data.q4.Yes / (data.q4.No + data.q4.Yes))*100).toFixed(0);
                no = ((data.q4.No / (data.q4.No + data.q4.Yes))*100).toFixed(0);
                break;
            case 4:
                yes = ((data.q5.Yes / (data.q5.No + data.q5.Yes))*100).toFixed(0);
                no = ((data.q5.No / (data.q5.No + data.q5.Yes))*100).toFixed(0);
                break;
            case 5:
                yes = ((data.q6.Yes / (data.q6.No + data.q6.Yes))*100).toFixed(0);
                no = ((data.q6.No / (data.q6.No + data.q6.Yes))*100).toFixed(0);
                break;
            case 6:
                yes = ((data.q7.Yes / (data.q7.No + data.q7.Yes))*100).toFixed(0);
                no = ((data.q7.No / (data.q7.No + data.q7.Yes))*100).toFixed(0);
                break;
            default:
                yes=1;
                no=1;
        }
        if(answeredYes === 0){
            placement.innerHTML = `
        <p><span class="yesPercent">${ yes }</span>% Agreed with you.</p>
        <p><span class="noPercent">${ no }</span>% Disagreed with you.</p>
        `;
        } else if(answeredYes === 1){
            placement.innerHTML = `
        <p><span class="noPercent">${ no }</span>% Disagreed with you.</p>
        <p><span class="yesPercent">${ yes }</span>% Agreed with you.</p>
        `;
        }
        
        
        if (!this.selected) {
            if (answeredYes === 0) {
                console.log("yes");
                    fetch(this.endpoint, {
                        method: "post",
                        body: JSON.stringify({
                            question: 1,
                            answer: "yes",
                        }),
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        }
                    }).then(() => {
                        this.selected = "Yes";
    
                        sessionStorage.setItem("answer", "Yes");
    
                        this._refresh();
                    })
                
            } else if (answeredYes === 1) {
                console.log("no");
                fetch(this.endpoint, {
                    method: "post",
                    body: `add=No`,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(() => {
                    this.selected = "No";

                    sessionStorage.setItem("answer", "No");
                    this._refresh();
                })
            }
        }
    }
}


yesButton.addEventListener('click', answer => {
    answeredYes = 0;
    const p = new Poll(document.querySelector('.answerBox'));
});
    
noButton.addEventListener('click', answer => {
    answeredYes = 1;
    const p = new Poll(document.querySelector('.answerBox'));
});

