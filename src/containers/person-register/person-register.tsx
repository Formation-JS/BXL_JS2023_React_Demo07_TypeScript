import { usePersonList } from '../../hooks/person.hook';
import FormIdent from '../../components/form-ident/form-ident';
import PeopleList from '../../components/people-list/people-list';

const PersonRegister = () => {

    const {people, addPerson, removePerson} = usePersonList();

    return (
        <>
            <FormIdent onPassData={addPerson} />
            <PeopleList onDeleteAction={removePerson} people={people} />
        </>
    );
};

export default PersonRegister;
