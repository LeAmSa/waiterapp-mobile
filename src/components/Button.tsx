import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

interface ButtonProps extends IButtonProps {
  children: React.ReactNode;
}

export function Button({ children, disabled, ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase
      w="full"
      bgColor={disabled ? "gray.300" : "red.default"}
      rounded="3xl"
      color="white"
      py="14px"
      px="6"
      disabled={disabled}
      {...rest}
    >
      <Text fontFamily="semi_bold" color="white">
        {children}
      </Text>
    </ButtonNativeBase>
  );
}
