import { Title, Text, Box, Image } from '@mantine/core'
import { MemberContent } from '@/utils/graphcms'
import { FC } from 'react'
// import Image from 'next/image'

const MemberText: FC<{ member: MemberContent }> = ({ member }) => {
    return (
        <Box>
            <Box>
                <Title>{member.name}</Title>
                <Box sx={{ display: "flex" }}>
                    {member.email && (
                        <a href={`mailto:${member.email}`} target="_blank">
                            <Image sx={{ margin: "5px", cursor: "pointer" }} width="30px" height="30px" src="/email.png" />
                        </a>
                    )}
                    {member.facebookLink && (
                        <a href={member.facebookLink} target="_blank">
                            <Image sx={{ margin: "5px", cursor: "pointer" }} width="30px" height="30px" src="/facebook.png" />
                        </a>
                    )}
                    {member.instagramLink && (
                        <a href={member.instagramLink} target="_blank">
                            <Image sx={{ margin: "5px", cursor: "pointer" }} width="30px" height="30px" src="/instagram.png" />
                        </a>
                    )}
                    {member.linkedInLink && (
                        <a href={member.linkedInLink} target="_blank">
                            <Image sx={{ margin: "5px", cursor: "pointer" }} width="30px" height="30px" src="/linkedin.png" />
                        </a>
                    )}
                    {member.twitterLink && (
                        <a href={member.twitterLink} target="_blank">
                            <Image sx={{ margin: "5px", cursor: "pointer" }} width="30px" height="30px" src="/twitter.png" />
                        </a>
                    )}
                </Box>
            </Box>
            <Box sx={{ marginTop: '2em' }}>
                <Text sx={{ fontSize: '1.5em', lineHeight: '1.8em', color: 'rgba(0, 0, 0, 0.6)' }}>{member.bio}</Text>
            </Box>
        </Box>
    )
}
export default MemberText
