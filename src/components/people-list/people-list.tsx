import type { Person } from '../../types/person';

type PeopleListProps = {
    people: Person[],
    onDeleteAction: (id: string) => void
}

type PeopleItemProps = {
    id: string,
    firstName: string,
    lastName: string,
    onDeleteAction: (id: string) => void
}


const PeopleItem = ({ id, firstName, lastName, onDeleteAction} : PeopleItemProps) => {


    return (
            <p>
                {firstName}{lastName} {' '}
                <span onClick={() => onDeleteAction(id)}>❌</span>
            </p>
    )
}

const PeopleList = ({people, onDeleteAction} : PeopleListProps) => {

    return (
        <>
            <div>
                { people.map((person) => 
                    <PeopleItem key={person.id}
                        // id={ person.id }
                        // firstName={ person.firstName } 
                        // lastName={ person.lastName } 
                        {...person} 
                        onDeleteAction={ onDeleteAction }
                    />)
                }
            </div>
        </>
    )
};

PeopleList.defaultProps = {
    people: []
}

export default PeopleList;