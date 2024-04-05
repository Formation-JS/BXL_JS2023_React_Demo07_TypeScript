// Fichier de déclaration du type "Person"

export type Person = {
    id: string;
    firstName: string;
    lastName: string;
};

// export type PersonData = {
//     firstName: string;
//     lastName: string;
// };
export type PersonData = Omit<Person, 'id'>;