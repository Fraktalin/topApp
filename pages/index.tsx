import Image from 'next/image';
import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Привет</Htag>
      <Button appereance='primary' arrow='right'>Кнопка</Button>
      <Button appereance='ghost'>Кнопка</Button>
      <P size='s'>Маленький</P>
      <P>Средний</P>
      <P size='l'>Большой</P>
      <Tag size='m' color='red'>medium red</Tag>
      <Tag size='m' color='ghost'>medium ghost</Tag>
      <Tag size='m' color='grey'>medium grey</Tag>
      <Tag size='s' color='green'>small red</Tag>
      <Tag size='s' color='primary'>small primary</Tag>
    </>
  );
}
