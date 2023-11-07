// ReactDOM.render(
//     <div class="Hello">
//         <h1>HI!</h1>
//     </div>,
//     document.getElementById("app")
// )

const hiText = function() {
    return <div className="hello">
        <div className="hi">    
            <p>HI!</p>
        </div>
        <div className="hi_text">
        <p>Welcome to by personal website.</p>
        <p>I have created this website to feel like a game/sci-fi interface. All <br></br>text inside tries to reflect this.</p>
        <p>You will find ‘achievements’ or ‘quests’ that show the progress in my <br></br>professional life and are related to what I am working on.</p>
        <div className="btn-enter">
            <a href="">ENTER THE SYSTEM</a>
        </div>
        </div>
    </div>
};

ReactDOM.render(
    hiText(), document.getElementById("hello-page")
);