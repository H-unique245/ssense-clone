import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';

function Homepage() {
  return (
    <>
      <Box height="auto" mb="10vh">
        {/* top two item box */}
        <Stack>
          <Box m="2%" padding="1rem" display="flex" gap="8vh">
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658237092/l06ie9510jtzzz2rif8k.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px', fontSize: '11px' }}>
                    Culture
                  </div>
                  <p
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    SMALL REVOLUTIONS WITH JOSHUA P. MATTHEWS
                  </p>
                </div>
                <div style={{ fontSize: '20px', lineHeight: '26px' }}>
                  {' '}
                  The NY-based cyclist and author of HARD-SHELL® speaks to
                  Sydney Allen-Ash about riding and archiving.
                </div>
              </Box>
            </Box>
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658263193/azvvibhaf1pig0yxqayw.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px', fontSize: '11px' }}>
                    Market
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    Tripping Out
                  </div>
                </div>
                <div style={{ fontSize: '20px', lineHeight: '26px' }}>
                  {' '}
                  Take a Trip with The Row, D.S. and Durga, and Eytys.
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>

        <hr></hr>
        {/* top three item box */}
        <Stack>
          <Box m="2%" padding="1rem" display="flex" gap="8vh">
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1657724273/a7zbukc9wafrdnxjebgc.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px', fontSize: '11px' }}>
                    Recent
                  </div>
                  <p
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    Test-Driving with Gogo Graham
                  </p>
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: 'gray',
                  }}
                >
                  {' '}
                  Fashion | Jul 15
                </div>
              </Box>
            </Box>
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655131638/urk0fprqhpz1n38of06f.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px', fontSize: '11px' }}>
                    Recent
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    Quiet Exuberance: Wales Bonner x Adidas SS22
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: 'gray',
                  }}
                >
                  {' '}
                  Fashion | Jul 15
                </div>
              </Box>
            </Box>
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1657574887/aapqvs6xhmiziwsusnpy.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px', fontSize: '11px' }}>
                    Recent
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    (Fashion) Industry Plants
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: 'gray',
                  }}
                >
                  {' '}
                  Fashion | Jul 15
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>

        {/* {two boxes mens*  with BUtton} */}
        <Stack>
          <Box m="2%" padding="1rem" display="flex" gap="8vh">
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150202/st2b4kpcidbuymyne5q6.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{ padding: '10px', fontSize: '11px', color: 'gray' }}
                  >
                    Featured
                  </div>
                  <p
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    addidas original
                  </p>
                </div>
                <div style={{ fontSize: '20px', lineHeight: '26px' }}>
                  <Button variant="outline"> SHOP MENSWEAR</Button>
                </div>
              </Box>
            </Box>
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150220/zdwad3rpmvd1yucrbzo6.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{ padding: '10px', fontSize: '11px', color: 'gray' }}
                  >
                    Featured
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    addidas original{' '}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    lineHeight: '26px',
                    textTransform: 'uppercase',
                  }}
                >
                  <Button variant="outline"> SHOP MENSWEAR</Button>{' '}
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>

        {/* {two boxes mens*  with BUtton} */}
        <Stack>
          <Box m="2%" padding="1rem" display="flex" gap="8vh">
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150350/h0z9kdfv1koxbtetht2b.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{ padding: '10px', fontSize: '11px', color: 'gray' }}
                  >
                    Featured
                  </div>
                  <p
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    ss daley
                  </p>
                </div>
                <div style={{ fontSize: '20px', lineHeight: '26px' }}>
                  <Button variant="outline"> SHOP WOMENSWEAR</Button>
                </div>
              </Box>
            </Box>
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150239/wogzonxxz0bbgc55puz6.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{ padding: '10px', fontSize: '11px', color: 'gray' }}
                  >
                    Featured
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    bottega veneta{' '}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    lineHeight: '26px',
                    textTransform: 'uppercase',
                  }}
                >
                  <Button variant="outline"> SHOP WOMENSWEAR</Button>{' '}
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>

        <Box display="flex" justifyContent="center" m="1rem">
          {' '}
          <Text
            as="h1"
            fontSize="71px"
            textAlign="center"
            w="75%"
            textTransform="uppercase"
          >
            Made in Vain: A Taxonomy of Eye-Opening Beauty Design
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" m="1rem">
          {' '}
          <Text as="h2" fontSize="53px" textAlign="center" w="95%">
            From Falsies to Full-Coverage Enhancers, These Products Live Beyond
            Their Application
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" m="1rem">
          <Button variant="outline"> VIEW EDITORIAL</Button>
        </Box>

        {/* bottom3 */}
        <Stack>
          <Box m="2%" padding="1rem" display="flex" gap="8vh">
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1656427509/kvdzdh9kvqywamz8jfvc.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      padding: '10px',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Recent
                  </div>
                  <p
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    Living the Anna Sui Fantasy
                  </p>
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: 'gray',
                  }}
                >
                  {' '}
                  Fashion | Jun 28
                </div>
              </Box>
            </Box>
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655828088/doatgzikdfaadogtnvv1.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      padding: '10px',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Recent
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    Finding the Last Love Hotel
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: 'gray',
                  }}
                >
                  {' '}
                  Culture | Jun 28
                </div>
              </Box>
            </Box>
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655820577/mvakse2eksisme4yhbt4.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      padding: '10px',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Recent
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    You’ve Got the Look
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: 'gray',
                  }}
                >
                  {' '}
                  Fashion | Jun 23
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>
        {/* bottpm 2 */}
        <Stack>
          <Box m="2%" padding="1rem" display="flex" gap="8vh">
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150264/smf4mzepaq855zmdegi1.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{ padding: '10px', fontSize: '11px', color: 'gray' }}
                  >
                    Featured
                  </div>
                  <p
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    y-3
                  </p>
                </div>
                <div style={{ fontSize: '20px', lineHeight: '26px' }}>
                  <Button variant="outline"> SHOP MENSWEAR</Button>
                </div>
              </Box>
            </Box>
            <Box w="50%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_768,q_90,f_auto,dpr_auto/v1658150277/hlaq5txh0gv05w9xyik7.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div
                    style={{ padding: '10px', fontSize: '11px', color: 'gray' }}
                  >
                    Featured
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    y-3
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    lineHeight: '26px',
                    textTransform: 'uppercase',
                  }}
                >
                  <Button variant="outline"> SHOP WOMENSWEAR</Button>{' '}
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>

        {/* Bottom three item box */}
        <Stack>
          <Box m="2%" padding="1rem" display="flex" gap="8vh">
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655745694/f4dxlcxg7vmes9gwcqsq.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px', fontSize: '11px' }}>
                    Recent
                  </div>
                  <p
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    Off to the Races: EVERYTHING ELSE™ Launches Cycling
                  </p>
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: 'gray',
                  }}
                >
                  {' '}
                  Market | Jun 22
                </div>
              </Box>
            </Box>
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1655300180/w7k1a3vsq9llf5uxmavw.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px', fontSize: '11px' }}>
                    Recent
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {' '}
                    Fear of God Essentials
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: 'gray',
                  }}
                >
                  {' '}
                  Market | Jun 17
                </div>
              </Box>
            </Box>
            <Box w="32%">
              <Box>
                <Image src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1654699821/di3hkg7jamutgcrph7g7.jpg" />
              </Box>
              <Box>
                <div style={{ display: 'flex' }}>
                  <div style={{ padding: '10px', fontSize: '11px' }}>
                    Recent
                  </div>
                  <div
                    style={{
                      fontSize: '19px',
                      lineHeight: '26px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Fame Is Fleeting, Celebrity Memoirs Are Forever
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: 'gray',
                  }}
                >
                  {' '}
                  Culture | Jun 13
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>

        {/* <>End of Homepage</> */}
      </Box>
    </>
  );
}

export default Homepage;
