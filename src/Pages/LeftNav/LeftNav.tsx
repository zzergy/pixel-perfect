import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useUndoRedo from '../../hooks/useUndoRedo'
import ColorFill from './ColorFill/ColorFill'
import ColorPicker from './ColorPicker/ColorPicker'
import Eraser from './Eraser/Eraser'
import FileMenu from './FileMenu/FileMenu'
import styles from './LeftNav.module.scss'
import Redo from './UndoRedo/Redo'
import Undo from './UndoRedo/Undo'
import Pencil from './Pencil/Pencil'

const LeftNav = () => {
    const { present } = useUndoRedo()

    return (
        <div className={styles.container}>
            <FileMenu />

            {present && <>
                <Pencil />
                <ColorPicker />
                <Eraser />
                <Undo />
                <Redo />
                <ColorFill />
            </>}
        </div>
    )
}

export default LeftNav