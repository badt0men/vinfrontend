import { Button, useColorModeValue as mode, } from '@chakra-ui/react'

interface OUTLINEBUTTON {
    red?: boolean;
    teal?: boolean;
    children: React.ReactNode;
    className?: string;
}

export const AppButton = ({ red, teal, children, className, ...props }: OUTLINEBUTTON) => {
    return (
        <Button variant="outline" rounded="md" w="30" fontSize="12" h="30px" fontWeight="regular" borderWidth="1px" borderColor={red ? mode('red.600', 'red.500') : teal ? "" : mode("deepBlue.100", "gray.400")} color={red ? mode("red.600", "red.500") : teal ? mode("skyBlue", "deepBlue.100") : ""} bg={red ? "" : teal ? mode('teal.500', 'teal.200') : ""} _hover={{ bgGradient: `${red ? "linear(to-r, red.200, red.100)" : teal ? "" : ""}`, color: `${red ? "white" : ""}`, borderColor: `${red ? "red.200" : teal ? mode('teal.600', 'teal.300') : ""}`, bg: `${red ? "" : teal ? mode('teal.600', 'teal.300') : "" }`}} className={className} {...props}>
            {children}
        </Button>
    )
}
