import React from 'react';
import {
	Box,
	Flex,
	Heading,
	VStack,
	Text,
	useColorModeValue as mode,
	Button,
	Spacer,
	HStack,
	Image,
} from '@chakra-ui/react';
import { RiQuestionFill } from 'react-icons/ri';

interface ImageProps {
	light: string,
	dark: string,
}
interface manImage {
	imageUrl: string,
	imageAlt: string,
}

const manImage: manImage = {
	imageUrl: '../image/assets/manHoldingCar.jpeg',
	imageAlt: 'Man Holding Car',
};
const leftImage: ImageProps = {
	light: "url('../image/assets/rightBlob.svg')",
	dark: "url('../image/assets/darkRightBlob.svg')",
};

export default function Benefit() {
	return (
		<Box maxW="7xl" mx="auto">
			<Flex
				pl={[ '8', '32' ]}
				py={[ '16', '20' ]}
				direction={[ 'column', 'row' ]}
				bgImage={mode(leftImage.light, leftImage.dark)}
				bgPosition={[ 'left 180%', '101% 1000%' ]}
				bgRepeat="no-repeat"
				bgSize={[ '0', '650px' ]}
				w="400"
				h="650"
			>
				<Box>
					<VStack>
						<Box>
							<Heading
								as="h1"
								fontSize={[ '24', '48' ]}
								color={mode('deepBlue.100', 'skyBlue')}
								fontWeight="medium"
							>
								Benefits of Checking<br /> Vehicle History Report{' '}
							</Heading>
							<Text
								py="8"
								fontSize={[ '16', '18' ]}
								color={mode('headingColor', 'skyBlue')}
								fontWeight="regular"
							>
								It’s very important to know a vehicle history when you are buying<br /> a vehicle on the
								secondary market. Car history check is a must<br /> especially with such a large used
								car market in Nigeria.<br />
								The likelihood of buying a car after an accident, fire, flood <br />or crime is very
								high. Vehicle information will help you avoid problems.
							</Text>
							<Heading as="h1" fontWeight="medium" fontSize="16">
								Want a free consultation from ONGAD experts?
							</Heading>
							<Spacer my="8" />
							<Button
								maxW={[ '100%', '40%' ]}
								bgGradient="linear(to-t, red.200, red.100)"
								rounded="md"
								color="white"
								_hover={{ bgGradient: 'linear(to-r, red.200, red.100)' }}
								fontSize="16px"
								fontWeight="medium"
							>
								<HStack>
									<Text>Get in touch with us </Text>
									<RiQuestionFill size="20" />
								</HStack>
							</Button>
						</Box>
					</VStack>
				</Box>
				<Box position="relative" ml={[ '0', '8' ]} mt={[ '8', '0' ]}>
					<Box
						maxW="350"
						h="470"
						bgColor="red.500"
						rounded="lg"
						pos="relative"
						top={[ '2', '3' ]}
						left={[ '2', '3' ]}
					/>
					<Image
						src={manImage.imageUrl}
						imagealt={manImage.imageAlt}
						w={350}
						h={470}
						rounded={`lg`}
						pos="relative"
						top={[ '-50%', '-96%' ]}
						left="0"
						alt={manImage.imageAlt}
					/>
				</Box>
			</Flex>
		</Box>
	);
}
