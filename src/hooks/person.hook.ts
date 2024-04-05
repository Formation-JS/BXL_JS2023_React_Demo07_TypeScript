import { useCallback, useState } from 'react';
import { nanoid } from 'nanoid';
import type { Person, PersonData } from '../types/person';

// Déclaration du typage du Hook
//? Object renvoyé
type usePersonListReturnType = {
    people: Person[];
    addPerson: (person: PersonData) => void;
    removePerson: (id: string) => void;
    updatePerson: (id:string, data: PersonData) => void;
};
//? Hook
type usePersonListType = (initialData?: Person[]) => usePersonListReturnType;

/**
 * Hook pour manipuler une liste de personne
 * Action possible : Ajouter, mettre à jours et supprimer
 * @param initialData Collection initial de personne
 * @returns Un objet avec la collection de personne et les méthodes d'action
 */
export const usePersonList : usePersonListType = (initialData) => {

    const [people, setPeople] = useState<Person[]>(initialData ?? []);

    console.log(people)

    const addPerson = useCallback((person: PersonData) => {
        setPeople(people => [...people, { id: nanoid(), ...person }])
    }, []);

    const removePerson = useCallback((id: string) => {
        setPeople(people => people.filter(person => person.id !== id))
    }, []);

    const updatePerson = useCallback((id: string, data: PersonData) => {
        setPeople(people => people.map(person => (person.id !== id) ? person : { ...person, ...data }))
    }, []);

    return { people, addPerson, removePerson, updatePerson };
}