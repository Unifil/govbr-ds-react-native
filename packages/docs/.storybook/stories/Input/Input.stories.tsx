import React, { useState } from 'react';
import { Input } from '@unifil/react-native';
import { View, Text } from 'react-native';

export default {
  title: 'Input',
  component: Input,
};

export const CPFvalido = () => <Input cpf label="CPF" onChangeText={text => console.log(text)} />;

export const CPFMenor = () => {
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');

  const handleCPFChange = text => {
    setCpf(text);
    if (text.length < 11) {
      setError('CPF deve ter 11 dígitos');
    } else {
      setError('');
    }
  };

  return (
    <View>
      <Input
        cpf
        label="CPF"
        value={cpf}
        onChangeText={handleCPFChange}
        error={error}
      />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
};

export const CPFinvalido = () => <Input label="Erro" error="Cpf inválido" onChangeText={text => console.log(text)} />;

export const Estilizado = () => (
  <View style={{ padding: 10, backgroundColor: '#eee' }}>
    <Input
      label="Estilizado"
      onChangeText={text => console.log(text)}
      style={{ backgroundColor: '#fff', borderColor: 'blue', borderWidth: 1 }}
    />
  </View>
);

