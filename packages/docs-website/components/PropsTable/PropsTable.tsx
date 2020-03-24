import React from 'react';

import { Prism as Code } from 'react-syntax-highlighter';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';

import styled, { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Text, Tooltip } from 'ustudio-ui';
import { renderers } from '../markdown/renderers';

export interface PropsMap {
  [name: string]: Prop;
}

interface Prop {
  type: string;
  required?: boolean;
  description?: string;
  defaultValue?: string;
  tooltip?: string;
}

const Styled = {
  TableTitle: styled(Text)`
    margin-top: var(--i-large);
  `,
  Table: styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-gap: var(--i-regular);
    padding: var(--i-regular) 0;
    margin-top: var(--i-large);

    border-radius: var(--border-radius);
    box-shadow: var(--neumo-shadow);
    overflow: hidden;
  `,
  Divider: styled.hr`
    height: 1px;
    width: 100%;
    margin: 0;
    border: none;
    background-color: var(--c-light);
  `,
  TableRow: styled.div`
    display: grid;
    grid-gap: var(--i-large);
    align-items: center;
    justify-content: center;
    padding: var(--i-regular);

    border-radius: var(--border-radius);

    grid-template-columns: 1fr 2fr 2fr;
  `,
  TableHeading: styled(Text)`
    place-self: center;
  `,
  PropMeta: styled.div`
    display: grid;
    grid-row-gap: 0.25rem;
    place-self: center;
  `,
  PropName: styled(Text)`
    place-self: center;

    ${({ required }: { required?: boolean }) =>
      required
        ? css`
            &:after {
              content: '*';
              font-size: var(--i-regular);
              font-weight: 700;
              color: var(--c-negative);
            }
          `
        : ''}
  `,
  PropType: styled(ReactMarkdown).attrs(() => ({
    renderers: {
      paragraph: renderers.paragraph,
      ...['code', 'inlineCode'].reduce(
        (codeRenderers, renderer) =>
          Object.assign(codeRenderers, {
            [renderer]: ({ value }: { value: string }) => (
              <Code
                language="typescript"
                style={coy}
                customStyle={{
                  padding: '0',
                  marginBottom: '0',
                  marginTop: '0',
                  backgroundColor: 'transparent',
                }}
                codeTagProps={{
                  style: {
                    whiteSpace: 'pre-wrap',
                    fontSize: '12px',
                  },
                }}
              >
                {value}
              </Code>
            ),
          }),
        {}
      ),
    },
  }))`
    place-self: center;
  `,
  PropDescription: styled(Text)`
    text-align: center;
    color: #9c9c9c;
  `,
};

export const PropsTable = ({
  props,
  classNames,
  componentName,
}: {
  props: PropsMap;
  classNames?: string[];
  componentName?: string;
}) => {
  return (
    <>
      <Styled.TableTitle variant="h4">{componentName ? `${componentName} props` : 'Props'}</Styled.TableTitle>
      <Styled.Table>
        <Styled.TableRow>
          {['prop', 'type', 'default value'].map(title => (
            <Styled.TableHeading variant="h6" key={title}>
              {title}
            </Styled.TableHeading>
          ))}
        </Styled.TableRow>

        <Styled.Divider />

        {Object.keys(props).map(name => {
          const { description, type, defaultValue, required, tooltip } = props[name];

          return (
            <React.Fragment key={name}>
              <Styled.TableRow>
                <Styled.PropMeta>
                  <Styled.PropName variant="small" required={required}>
                    {tooltip ? (
                      <Tooltip position="right" value={tooltip}>
                        {name}
                      </Tooltip>
                    ) : (
                      name
                    )}
                  </Styled.PropName>

                  {description && <Styled.PropDescription variant="small">{description}</Styled.PropDescription>}
                </Styled.PropMeta>

                <Styled.PropType source={type} />

                {defaultValue ? <Styled.PropType source={defaultValue} /> : ''}
              </Styled.TableRow>

              <Styled.Divider />
            </React.Fragment>
          );
        })}

        <Styled.TableRow>
          <Styled.PropMeta>
            <Styled.PropName variant="small">className</Styled.PropName>

            <Styled.PropDescription variant="small">
              className to be placed on a main HMTL element in the component
            </Styled.PropDescription>
          </Styled.PropMeta>

          <Styled.PropType source="`string`" />
        </Styled.TableRow>

        {classNames && (
          <>
            <Styled.Divider />

            <Styled.TableRow>
              <Styled.PropMeta>
                <Styled.PropName variant="small">classNames</Styled.PropName>

                <Styled.PropDescription variant="small">
                  List of classes for every styled element in the component
                </Styled.PropDescription>
              </Styled.PropMeta>

              <Styled.PropType source={`\`${classNames.join(' | ')}\``} />
            </Styled.TableRow>
          </>
        )}
      </Styled.Table>
    </>
  );
};
