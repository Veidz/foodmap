import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components/native";

export const LoginContainer = styled(LinearGradient).attrs({
  colors: ["#380036", "#0cbaba"],
  start: { x: 0.5, y: -0.5 },
  end: { x: 3, y: 0.5 }
})`
  flex: 1;
`
