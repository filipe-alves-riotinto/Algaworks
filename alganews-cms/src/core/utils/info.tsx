import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Info from '../../app/components/Info/Info'

interface InfoProps{
    title: string
    description: string
}

export default function info (props: InfoProps) {
    setTimeout(() => {
        confirmAlert({
            overlayClassName:'confirm-overlay',
            customUI: () => {
              return (
                <Info
                    title={props.title}
                    description={props.description}
                />
              );
            }
          })
    }, 0)
}