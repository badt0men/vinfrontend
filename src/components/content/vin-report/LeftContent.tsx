import {
  Box,
  Flex,
  Heading,
  VStack,
  SimpleGrid,
  HStack,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  useColorModeValue as mode,
  Image,
  Text,
  BoxProps,
  Spacer,
  ListIcon,
  Badge,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  BsShieldFillCheck,
  BsShieldFillExclamation,
  BsShieldSlashFill,
} from "react-icons/bs";
import vinStore from "../../../../store/store";
import styles from "./report.module.css";
import _ from "lodash";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion' 
import { MdCheckCircle } from "react-icons/md";

//Left section component
const LeftSection = ({ data }: any) => {

    ///necessary because of some hydration issue
    const [vin, setVin] = useState(null);
    const evin = vinStore(state => state.vin)
    useEffect(() => {
        setVin(evin);
    },[])
  return (
    <>
      <Box w="75%" py="8" pos="relative">
        <TopMenuSection  vin={vin}/>
        <TopContentSection data={data} vin={vin} />
      </Box>
    </>
  );
};

export function TopMenuSection({vin}:any) {

  return (
    <>
      <Box
        className={styles.shadowBottom}
        bg={mode("", "#1d273a")}
        borderBottomRadius="4px"
        h="40px"
        w="100%"
        pos="absolute"
        top={0}
        left={0}
      >
        <Flex maxW="90%" mx="auto">
          <Link href="/">
            <Heading
              as="h1"
              fontWeight="medium"
              p="3"
              fontSize="14px"
              color="red.500"
            >
              Home
            </Heading>
          </Link>
          <Heading as="h1" fontWeight="medium" p="3" fontSize="14px">
            /
          </Heading>
          <Link href="#">
            <Heading
              as="h1"
              fontWeight="medium"
              p="3"
              fontSize="14px"
              color="teal"
            >
              Vehicle Report
            </Heading>
          </Link>
          <Heading as="h1" fontWeight="medium" p="3" fontSize="14px">
            /
          </Heading>
          <Link href="#">
            <Heading
              as="h2"
              fontWeight="medium"
              p="3"
              fontSize="14px"
              color={mode("gray.500", "")}
            >
              Check {vin}
            </Heading>
          </Link>
        </Flex>
      </Box>
    </>
  );
}


export function TopContentSection({ data , vin }: any) {
  const [tableData, setTableData] = useState([]);
  const [initTrim, setInitTrim] = useState(7);
  const allTableData = _.size(tableItems);
  const [hideBtn, setHideBtn] = useState(false);

  
  useEffect(() => {
    const items: any = tableItems.slice(0, initTrim);
    setTableData(items);
  }, [initTrim]);

  const loadMore = (e: any) => {
    e.preventDefault(); 
    setInitTrim(allTableData);
    setHideBtn(true);
  };

  //animation
  const MotionBox = motion<BoxProps>(Box);
  const loadmoreVariants = {
    initial: { opacity: 1, y: 0 }, 
    visible: { opacity: 0, y: 150, transition: { duration: 1, ease: 'easeInOut'} },
  }
  
  return (
    <>
      <Box mt="16" maxH="80vh" pb="20%" overflowY="auto">
        <VStack>
          <Flex w="100%" px="12">
            <Box boxSize="250" minW="250">
              <Image
                src="/image/assets/noimageavailable.png"
                alt="car"
                borderRadius="10px"
              />
              <Box mt="4">
                <WhatIsVin />
                <WhereToFindVin />
                <WhatReportDoIGetForFree />
              </Box>
            </Box>
            <Box ml="8">
              <Heading
                as="h1"
                color={mode("headingColor", "")}
                textAlign={"left"}
                fontSize="28"
              >
                {data.years[0]?.year} {data?.make?.name} {data?.model?.name}
              </Heading>
              <Text
                fontWeight="bold"
                textTransform="capitalize"
                color="teal"
                textAlign={"left"}
                fontSize="22"
                textShadow={mode("1px 1px #f4f6fc", "1px 1px #252e4b")}
                mt="2"
              >
                VIN {vin}
              </Text>
              <SimpleGrid columns={2} spacing="1px">
                <Text
                  textTransform="capitalize"
                  fontWeight="normal"
                  textAlign={"left"}
                  fontSize="15"
                  mt="2"
                  color={mode("subHeadingColor", "gray.400")}
                >
                  Engine:{" "}
                  <Box as="span" fontWeight="medium">
                    {data?.engine?.type} - {data?.engine?.name}
                  </Box>
                </Text>
                <Text
                  fontWeight="normal"
                  textAlign={"left"}
                  fontSize="15"
                  mt="2"
                  color={mode("subHeadingColor", "gray.400")}
                >
                  Transmission:{" "}
                  <Box as="span" fontWeight="medium">
                    {data?.transmission?.transmissionType}
                  </Box>
                </Text>
                <Text
                  fontWeight="normal"
                  textAlign={"left"}
                  fontSize="15"
                  mt="2"
                  color={mode("subHeadingColor", "gray.400")}
                >
                  Last ODO Reading:{" "}
                </Text>
                <Text
                  fontWeight="normal"
                  textAlign={"left"}
                  fontSize="15"
                  mt="2"
                  color={mode("subHeadingColor", "gray.400")}
                >
                  Vehicle Type:{" "}
                  <Box as="span" fontWeight="medium">
                    {data?.categories?.vehicleSize}{" "}
                    {data?.categories?.vehicleStyle}{" "}
                    {data?.categories?.vehicleType}
                  </Box>{" "}
                </Text>
              </SimpleGrid>
              <HStack mt="4">
                <Button colorScheme="teal">
                  <Link href="/">
                    <Text fontWeight="medium" fontSize="12">
                      Edit VIN
                    </Text>
                  </Link>
                </Button>
                <Button
                  bgGradient="linear(to-t, red.200, red.100)"
                  rounded="md"
                  color="white"
                  _hover={{ bgGradient: "linear(to-r, red.200, red.100)" }}
                  fontSize="16px"
                  fontWeight="medium"
                >
                  <Text fontWeight="semibold" fontSize="12">
                    Speak to our experts
                  </Text>
                </Button>
              </HStack>
              <Box py="2">
                <Text fontSize="11px" color="gray.500">
                  You can speak to our vehicle experts on matters relating to
                  your vehicle. We are always ready to lend the best hands in
                  the business to giving you the true definition of your
                  vehicle. We are happy to help you with any questions you may
                  have.
                </Text>
              </Box>
            </Box>
          </Flex>
          <Box w="90%" borderRadius="15px">
            <Table variant="striped" colorScheme="gray">
              <Tbody
                fontWeight="medium"
                fontSize="15px"
                color={mode("subHeadingColor", "gray.400")}
              >
                {tableData.map(({id, title, value}:any) => (
                  <Tr key={id}>
                    <Td>{title}</Td>
                    <Td>
                      <HStack>
                        {value !== null && value !== 0 ? (
                          <>
                            <BsShieldFillCheck color="teal" />
                            <Text>{value} Records Found</Text>{" "}
                          </>
                        ) : value === 0 ? (
                          <>
                            <BsShieldFillExclamation color="#b34242" />{" "}
                            <Text> No Records Found </Text>
                          </>
                        ) : value === null ? (
                          <>
                            <BsShieldSlashFill /> <Text> Unverified</Text>
                          </>
                        ) : null}
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
                <Box
              id="showAll"
              bgGradient={mode(
                "linear(to-t, gray.200, white)",
                "linear(to-t, gray.600, #1A202C)"
              )}
              h="130px"
              align="center"
              mt="-70px"
              position="relative"
              opacity=".7"
              borderBottomRadius="5px"
            >
              <Button
                mt="20"
                size="sm"
                colorScheme="default"
                variant="outline"
                onClick={loadMore}
              >
                <Text fontWeight="medium" fontSize="12">
                  Show all
                </Text>
              </Button>
            </Box>
          </Box>
          <Spacer py="4" borderBottom="1px" borderColor={mode("gray.200", "gray.700")} />
          <Box w="90%">
              <Heading as="h1" py="4" color={mode("headingColor", "")} textAlign={"left"} fontSize="28">
                  The complete VIN solution
              </Heading>
              <Text fontSize="14" fontWeight="regular" textAlign="left" py="4">OnGad VIN check provides the most comprehensive, up to date and insightful car information. Our checks span across, but never limited to:</Text>
              <SimpleGrid columns={2} spacing="1px">
                {carInfo.map(({id, name}:any) => (
                    <Box
                    textAlign={"left"}
                    fontSize="15"
                    mt="2"
                    color={mode("subHeadingColor", "gray.400")}
                    key={id}> 
                    <HStack>
                    <MdCheckCircle color="teal" />
                    <Box as="span" fontWeight="regular">
                    {name}
                    </Box>
                    </HStack>
                    </Box>
                ))}
              </SimpleGrid>
              <Box py="10">
              <Badge bg={mode("skyBlue", "deepBlue.100")} rounded="md" color={mode("myGray", "skyBlue" )} borderRadius={5}>
                        <Text fontSize="16px" fontWeight="medium" textTransform="unset"  p="4" >
                            <Box as ="span" color="red.100">Great News!: </Box> We found {} historical records for this vehicl
                        </Text>
              </Badge>
              </Box>
          </Box>
          {/* endsection */}
        </VStack>
      </Box>
    </>
  );
}

export function WhatIsVin() {
    return (
        <Popover placement='top-start'>
            <PopoverTrigger>
                <Text
                    pb="2"
                    fontSize="11"
                    fontWeight="semibold"
                    color={mode("gray.500", "gray.400")}
                >
                    {" "}
                    <a href="#">
                    What is VIN?
                    </a>
                </Text>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader fontWeight='medium' fontSize="14px">What is a VIN</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody fontWeight="regular" fontSize="12" color={mode("subHeadingColor", "gray.400")}>
                    <Text py="2">A vehicle identification number (VIN) is a unique code, including a serial number used by the automotive industry to identify individual motor vehicles, towed vehicles, motorcycles, scooters and mopeds as defined in ISO 3779 and ISO 4030.</Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export function WhereToFindVin() {
    return (
        <Popover placement='top-start'>
            <PopoverTrigger>
                <Text
                    pb="2"
                    fontSize="11"
                    fontWeight="semibold"
                    color={mode("gray.500", "gray.400")}
                >
                    {" "}
                    <a href="#">
                    Where can I find it?
                    </a>
                </Text>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader fontWeight='medium' fontSize="14px">Where can I find it?</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody fontWeight="regular" fontSize="12" color={mode("subHeadingColor", "gray.400")}>
                    <Text py="2">You can find your VIN through the lower right of the windshield, and under the hood of your front engine. As for motorcycle VIN, you can find your VIN on the motorcycle frame. </Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
export function WhatReportDoIGetForFree() {
    return (
        <Popover placement='top-start'>
            <PopoverTrigger>
                <Text
                    pb="2"
                    fontSize="11"
                    fontWeight="semibold"
                    color={mode("gray.500", "gray.400")}
                >
                    {" "}
                    <a href="#">
                    What report do I get for free?
                    </a>
                </Text>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader fontWeight='medium' fontSize="14px">What report do I get for free?</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody fontWeight="regular" fontSize="12" color={mode("subHeadingColor", "gray.400")}>
                    <Text py="2">Using our free VIN decoder, you get basic, detailed reports about your vehicle(s). These reports give you an insightful direction on concise decision to take on your vehicle(s). However, if you need to get deep analysis and report of your vehicle including <Box as="span" className={styles.emphasis}>title check, theft check,</Box> e.t.c. You'd have to pay small token to get these second to none class of information on your vehicle(s).</Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}


type tableItems = {
  id: number;
  title: string;
  value: number | null | 0;
}[];

const tableItems: tableItems = [
  {
    id: 1,
    title: "Mileage",
    value: 5,
  },
  {
    id: 2,
    title: "Photos From Listing & Autions",
    value: 8,
  },
  {
    id: 3,
    title: "NMVTIS Vehicle History",
    value: 0,
  },
  {
    id: 4,
    title: "Junk & Salvage Information",
    value: 0,
  },
  {
    id: 5,
    title: "Title History",
    value: 2,
  },
  {
    id: 6,
    title: "Recalls",
    value: 0,
  },
  {
    id: 7,
    title: "Insurance Information",
    value: 0,
  },
  {
    id: 8,
    title: "Equipment",
    value: 0,
  },
  {
    id: 9,
    title: "Market Size Analysis",
    value: null,
  },
  {
    id: 10,
    title: "Ourneship",
    value: 15,
  },
  {
    id: 11,
    title: "Title History",
    value: 5,
  },
];

const carInfo = [
    {
        id: 1,
        name: "Car servicing info"
    },
    {
        id: 2,
        name: "Odometer accuracy check"
    },
    {
        id: 3,
        name: "Car condition check against listings"
    },
    {
        id: 4,
        name: "Vehicle crucial OEM recalls"
    },
    {
        id: 5,
        name: "Vehicle Safety & Security"
    },
    {
        id: 6,
        name: "Accident History"
    },
    {
        id: 7,
        name: "Price History & Mileage Check"
    },
    {
        id: 8,
        name: "Vehicle Theft History"
    },

]

export default LeftSection;
