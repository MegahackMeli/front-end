import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

const optionsStep = {
  nextBtnText: "Próximo",
  previousBtnText: "Anterior",
  finishBtnText: "Cadastrar",
};

const optionsBar = {
  activeLabelColor: "#1D2C7C",
  completedLabelColor: "#1D2C7C",
  labelColor: "#5A9AFB",
  activeStepNumColor: "#1D2C7C",
  progressBarColor: "#5A9AFB",
  disabledStepNumColor: "#FFF",
  activeStepIconBorderColor: "#1D2C7C",
  completedStepIconColor: "#1D2C7C",
  completedProgressBarColor: "#1D2C7C",
  disabledStepIconColor: "#5A9AFB",
};

export default function Cadastro() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={{ flex: 1 }}>
        <ProgressSteps {...optionsBar}>
          <ProgressStep {...optionsStep} label="Primeira etapa">
            <View style={{ alignItems: "center" }}>
              <Text>
                This is the content within step 1! This is the content within
                step 1
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep {...optionsStep} label="Segunda etapa">
            <View style={{ alignItems: "center" }}>
              <Text>
                This is the content within step 2! This is the content within
                step 1
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep {...optionsStep} label="Terceira etapa">
            <View style={{ alignItems: "center" }}>
              <Text>
                This is the content within step 3! This is the content within
                step 1
              </Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </KeyboardAvoidingView>
  );
}
