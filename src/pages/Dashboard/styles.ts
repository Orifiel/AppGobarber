import styled from 'styled-components';
import { Platform } from 'react-native';

export const Container = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 180 : 40}px;
`;
