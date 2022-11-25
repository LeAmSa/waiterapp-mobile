import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

interface ButtonProps extends IButtonProps {
  children: React.ReactNode;
  isOkConfirm?: boolean;
}

export function Button({
  children,
  disabled,
  isOkConfirm,
  ...rest
}: ButtonProps) {
  return (
    <ButtonNativeBase
      w={isOkConfirm ? "20" : "full"}
      bgColor={disabled ? "gray.300" : isOkConfirm ? "white" : "red.default"}
      rounded="3xl"
      color="white"
      py="14px"
      px="6"
      disabled={disabled}
      {...rest}
    >
      <Text
        fontFamily="semi_bold"
        color={isOkConfirm ? "red.default" : "white"}
      >
        {children}
      </Text>
    </ButtonNativeBase>
  );
}
