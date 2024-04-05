import { useId, useRef, useState } from 'react'
import type { PersonData } from '../../types/person';

// Déclaration du typage des props 
//? Via un type
type FormIdentProps = {
    onPassData: (person: PersonData) => void
}
//? Via un interface
// interface FormIdentProps {
//     onPassData : (person: PersonData) => void
// }

// Le composant React
const FormIdent = ({ onPassData }: FormIdentProps) => {

    //? Génération d'un identifier pour l'accessibilité du formulaire
    const persId: string = useId();

    //? Variable de state synchronisé au formulaire (Composant controllé)
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    //? Variable référence - Utiliser pour manipuler le focus d'une balise input
    const inputRef = useRef<HTMLInputElement>(null)

    //? Méthode pour traiter le submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const data: PersonData = { firstName, lastName };
        onPassData(data);

        handleReset();
    };

    //? Méthode pour traiter le reset
    const handleReset = () => {
        setFirstName('')
        setLastName('')
        inputRef.current?.focus()
    }

    //? Rendu du composant
    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <div>
                <label htmlFor={persId + '-prenom'}>Prenom</label>
                <input ref={inputRef} type="text" id={persId + '-prenom'}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label htmlFor={persId + '-nom'}>Nom</label>
                <input type="text" id={persId + '-nom'}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <button type="submit">submit</button>
                <button type='reset'>Reset</button>
            </div>
        </form>
    )
}

// Valeur par defaut du composant
FormIdent.defaultProps = {
    onPassData: () => { }
};

export default FormIdent