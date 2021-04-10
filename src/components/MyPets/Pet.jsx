const Pet = (props) => {
    const {pet} = props
    return(
        <div>
            {/* pet.img
            pet.name
            pet.status
             */}
             <div>
                 {pet.img}
             </div>
             <div>
                 {pet.name}
             </div>
             <div>
                 {pet.status}
             </div>

             <button>
                 See more
             </button>
        </div>
    )
}

export default Pet