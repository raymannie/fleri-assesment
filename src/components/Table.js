const Table = ({className, children}) => {
    return ( 
        <div className={`table-card ${className}`}>
        {children}
        </div>
     );
}

const TableHead = ({children}) => {
    return ( 
        <div className="table-card__head">
        {children}
        </div>
     );
}

const TableContent = ({children}) => {
    return ( 
        <div className="table-card__content">
            {children}
        </div>
     );
}
 

const TableRow = ({children}) => {
    return ( 
        <div className="table-card__row">
            {children}
        </div>
     );
}

const TableFoot = ({children}) => {
    return ( 
        <div className="table-card__row">
            {children}
        </div>
     );
}

 
 
export  {
    Table,
    TableHead,
    TableRow,
    TableContent,
    TableFoot
}