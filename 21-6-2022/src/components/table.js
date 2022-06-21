import './table.css'
function Table(){
    return(
        <div className="container-fluid row">
            <p className="col-12 border">
                <img src="https://picsum.photos/200" />
                <input type="checkbox" />
                <span>HTML</span>
            </p>
            <p className="col-12 border">
                <img src="https://picsum.photos/200" />
                <input type="checkbox" />
                <span>php</span>
            </p>
            <p className="col-12 border">
                <img src="https://picsum.photos/200" />
                <input type="checkbox" />
                <span>CSS</span>
            </p>
        </div>
    )
}

export default Table;