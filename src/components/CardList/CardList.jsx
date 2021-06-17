import Card from "../Card";

import styles from './CardList.module.css';

const CardList = ({monsters}) => {
    return (
        <div className={styles.CardList}>
            {monsters.map(({id, name, email}) => {
                return <Card id={id} name={name} email={email}/>
            })}
        </div>
    );
};

export default CardList;