import styled from 'styled-components/native';
import {View} from 'react-native';
import React from 'react';
import {ColorValue} from 'react-native/Libraries/StyleSheet/StyleSheet';

export interface BarDatum {
  value: number;
  color: ColorValue;
  label: string;
}

interface BarChartProps {
  data: BarDatum[];
}

interface BarProps {
  color: ColorValue;
}

export const BarChart: React.FC<BarChartProps> = ({data}) => {
  // TODO introduce scale
  const yLabels = ['100%', '75%', '50%', '25%', '0%'];
  const yValues = data.map(datum => datum.value);
  const height: number = Math.max(...yValues);

  return (
    <View>
      <YAxisContainer>
        {yLabels.map((label, index) => (
          <React.Fragment key={index}>
            <YAxisLabel>{label}</YAxisLabel>
            {index !== yLabels.length - 1 && <DottedLine />}
          </React.Fragment>
        ))}
      </YAxisContainer>
      <XAxisContainer>
        {data.map((datum, index) => (
          <View key={index}>
            <Bar style={{height: datum.value}} color={datum.color} />
            <XAxisLabel>{datum.label}</XAxisLabel>
          </View>
        ))}
      </XAxisContainer>
    </View>
  );
};

const XAxisContainer = styled.View`
  position: absolute;
  margin: 0 0 0 30px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

const XAxisLabel = styled.Text`
  color: black;
  font-size: 12px;
  text-align: center;
`;

const YAxisContainer = styled.View`
  width: 100%;
  border: 1px solid grey;
`;

const YAxisLabel = styled.Text`
  color: black;
  font-size: 12px;
`;

const Bar = styled.View<BarProps>`
  width: 30px;
  background-color: ${(props: any) => props.color};
  border-radius: 5px;
  margin: 0 1px;
`;

const DottedLine = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: black;
  border-style: dotted;
`;
