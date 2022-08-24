import React, { MutableRefObject, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { sortType } from '../constants';
import { changeCurrentSortType } from '../store/actions';
import { Actions, State } from '../types/store';

const mapState = (state: State) => ({
  currentSortType: state.currentSortType,
});

const mapDispatch = (dispatch: Dispatch<Actions>) => ({
  onChangeSortType(sort: string) {
    dispatch(changeCurrentSortType(sort));
  },
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Sorting(props: PropsFromRedux) {
  const { currentSortType, onChangeSortType } = props;
  const [isListOpened, setIsListOpened] = useState(false);
  const listRef: MutableRefObject<HTMLUListElement | null> = useRef(null);
  const optionActiveRef: MutableRefObject<HTMLLIElement | null> = useRef(null);
  const optionRef: MutableRefObject<HTMLLIElement | null> = useRef(null);

  const handleSelectClick = () => {
    if (isListOpened) {
      listRef.current?.classList.remove('places__options--opened');
      setIsListOpened(false);
      return;
    }
    listRef.current?.classList.add('places__options--opened');
    setIsListOpened(true);
  };

  const handleOptionClick = (type: string) => {
    onChangeSortType(type);
    listRef.current?.classList.remove('places__options--opened');
    setIsListOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span onClick={handleSelectClick} className="places__sorting-type" tabIndex={0}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul ref={listRef} className="places__options places__options--custom">
        {Object.values(sortType).map((type) => {
          if (type === currentSortType) {
            return (
              <li key={type} ref={optionActiveRef} className="places__option places__option--active" tabIndex={0}>
                {currentSortType}
              </li>
            );
          }
          return (
            <li
              key={type}
              ref={optionRef}
              onClick={() => handleOptionClick(type)}
              className="places__option"
              tabIndex={0}
            >
              {type}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default connector(Sorting);
