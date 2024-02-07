import React from 'react';
import Atom from './atom';


type AtomsType = 'weekdayCheckbox' | 'percentProgress';

type AtomsProps = {
    config: string;
    type: AtomsType;
};

class Atoms extends React.Component<AtomsProps> {
    renderAtoms() {
        const { type, config, } = this.props;

        switch (type) {
            case 'weekdayCheckbox':
                return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((option, index) => (
                    <Atom key={index} type='checkbox'>{option}</Atom>
                ));
                break;
            case 'percentProgress':
                return <Atom type='input%'>Progress: </Atom>;
           
            default:
                break;
        }

        return null;
    }

    render() {
        return this.renderAtoms();
    }
}

export default Atoms;
