import type { Person } from '../../types/person';

// Déclaration du typage des props des 2 composants
//? Composant "Item"
type PeopleItemProps = {
    id: string,
    firstName: string,
    lastName: string,
    onDeleteAction: (id: string) => void
}
//? Composant "List"
type PeopleListProps = {
    people: Person[],
    onDeleteAction: (id: string) => void
}

// Composant "Item" - Afficher les données d'un personne
const PeopleItem = ({ id, firstName, lastName, onDeleteAction} : PeopleItemProps) => {
    return (
            <p>
                {firstName}{lastName} {' '}
                <span onClick={() => onDeleteAction(id)}>❌</span>
            </p>
    )
}

// Composant "List" - Affiche la collection de personne
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

// Valeur par defaut du composant "List"
PeopleList.defaultProps = {
    people: []
}

export default PeopleList;