import { useMemo } from "react";
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

interface RadioButtonsProps {
    selectedId: string | undefined
    setSelectedId: Function
    options: {id: string, label:string, value:string}[]

}

export default function RadioButton({selectedId, options, setSelectedId}:RadioButtonsProps) {
    const radioButtons: RadioButtonProps[] = useMemo(() => (options), []);

    return (
        <RadioGroup
            layout="row"
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
        />
    );
  }

