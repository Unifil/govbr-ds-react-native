/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRecoilState, useRecoilValue } from 'recoil'
import { IconButton } from './components/IconButton'
import { EditorContext } from './context/editor'
import { usePerformCrop } from './customHooks/usePerformCrop'
import { editorOptionsState, isEditState } from './Store'

function ControlBar() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState)
  const { controlBar } = useRecoilValue(editorOptionsState)
  const { onBackPress, onSave } = useContext(EditorContext)
  const performCrop = usePerformCrop()

  const onEditDone = async () => {
    await performCrop()
    setIsEdit(true)
    onSave()
  }

  return (
    <View
      style={[
        styles.container,
        {
          height: controlBar?.height,
          justifyContent: 'center',
        },
      ]}
    >
      <View
        style={{
          justifyContent: 'flex-start',
          width: '100%',
          backgroundColor: '#fff',
          height: 300,
          paddingTop: 20,
        }}
      >
        <IconButton
          textColor={'#fff'}
          text={controlBar?.cropButton?.text!}
          color={'#1351B4'}
          onPress={onEditDone}
        />
        <IconButton
          color={'transparent'}
          text={'Cancelar'}
          textColor={'#1351B4'}
          onPress={() => {
            onBackPress()
            setIsEdit(false)
          }}
        />
      </View>
    </View>
  )
}

export { ControlBar }

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 4,
    justifyContent: 'flex-start',
    height: 150,
  },
})
