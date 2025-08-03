import { Html, Body, Container, Text, Link, Preview } from "@react-email/components"
const WelcomeTemplate = ( { name }: { name: string } ) => {
    return (
        <Html>
            <Preview>مرحبا بكم في حرفة</Preview>
            <Body className="bg-secondary flex justify-center align-middle">
                <Container>
                    <Text className="font-bold text-active text-xl">
                      { name }  مرحبا 
                    </Text>
                    <Text>
                        شكرا لتواصلكم معنا، نسعد بخدمتكم
                        فريق حرفة سوف يتواصل معكم خلال 48 ساعة
                        دمتم بود
                    </Text>
                    <Link href="herfa.net"> حــــــــــرفة</Link>
                </Container>

            </Body>
        </Html>
    )
}

export default WelcomeTemplate