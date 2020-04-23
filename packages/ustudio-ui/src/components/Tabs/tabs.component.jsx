import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../utils';

import { Styled } from './styles';

const Tabs = ({ tabs, active, disabledTabs, onChange, variant = 'h3', styled, classNames, className = '' }) => {
  const [offset, setOffset] = useState(0);

  return (
    <Styled.Tabs
      tabsQuantity={(1 / tabs.length) * 100}
      $offset={offset}
      className={className}
      $classNames={classNames}
      $styled={styled}
    >
      {tabs.map((tab, index) => (
        <Styled.TabContainer key={tab.value} $classNames={classNames} $styled={styled}>
          <Styled.Tab
            role="tab"
            isActive={active === tab.value}
            disabled={disabledTabs?.includes(tab.value)}
            onClick={() => {
              onChange(tab.value);
              setOffset((index / tabs.length) * 100);
            }}
            variant={variant}
            $classNames={classNames}
            $styled={styled}
          >
            <Styled.TabContent $classNames={classNames} $styled={styled}>
              {tab.children}
            </Styled.TabContent>
          </Styled.Tab>
        </Styled.TabContainer>
      ))}
    </Styled.Tabs>
  );
};

Tabs.displayName = 'Tabs';

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
    })
  ).isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabledTabs: PropTypes.arrayOf(PropTypes.string),
  variant: common.text,
  ...classNames(Object.keys(Styled)),
};

Tabs.defaultProps = {
  variant: 'h3',
};

export default Tabs;
