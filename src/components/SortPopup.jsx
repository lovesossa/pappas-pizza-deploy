import React from 'react'
import PropTypes from 'prop-types';

const SortPopup = React.memo(
    function SortPopup({ items, activeSortType, onClickSortType }) {
        const [visiblePopup, setVisiblePopup] = React.useState(false);
        const sortRef = React.useRef();
        const activeLabel = items.find((obj) => obj.type === activeSortType).name;
    
        const toggleVisiblePopup = () => {
            setVisiblePopup(!visiblePopup)
        };
    
        const handleOutsideClick = (event) => {
            const path = event.path || (event.composedPath && event.composedPath());
            if (!path.includes(sortRef.current)) {
              setVisiblePopup(false);
            }
        };
        
        const onSelectItem = (index) => {
            if (onClickSortType) {
                onClickSortType(index);
            }
            setVisiblePopup(false);
        }
        
        React.useEffect(() => {
            document.body.addEventListener("click", handleOutsideClick);
        }, []);
    
        return (
            <div className="menu--pizza__cat-sort sort-cat"  ref={sortRef}>
                <div className={visiblePopup ? "sort-cat__label-rotate" : "sort-cat__label"}>
                    <b>Сортировать по:</b>
                    <span onClick={toggleVisiblePopup}>{activeLabel}</span>
                </div>
                {visiblePopup && <div className="sort-cat__popup">
                    <ul className="sort-cat__popup-list">
                        {items &&
                            items.map((obj, index) => ( 
                            <li 
                            onClick={() => onSelectItem(obj)}
                            className={activeSortType === obj.type ? 'active' : ''}
                            key={`${obj.type}_${index}`}>
                            {obj.name}
                            </li> 
                        ))}
                    </ul>
                </div>}
            </div>
        )
    }
);

SortPopup.propTypes = {
    activeSortType: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickSortType: PropTypes.func.isRequired,
};
  
SortPopup.defaultProps = {
    items: [],
};
  
export default SortPopup;
