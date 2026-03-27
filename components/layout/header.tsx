import React from 'react'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Text } from '@/components/ui/text'
import { Image } from '@/components/ui/image'
import { Pressable } from '@/components/ui/pressable'
import { useRouter } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'

interface HeaderProps {
  showAvatar?: boolean
  showLogo?: boolean
  showBack?: boolean
  title?: string
  subtitle?: string
  rightElement?: React.ReactNode
  variant?: 'default' | 'transparent'
}

export const Header = ({ 
  showAvatar = true, 
  showLogo = true,
  showBack = false,
  title = "Go",
  subtitle = "Universe of Manga",
  rightElement,
  variant = 'default'
}: HeaderProps) => {
  const router = useRouter()

  return (
    <HStack className={`justify-between items-center ${variant === 'default' ? 'mb-8' : ''} px-1`}>
      <HStack className="items-center gap-4">
        {showBack ? (
          <Pressable 
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full bg-background-50 items-center justify-center border border-background-100 active:scale-95"
          >
            <ArrowLeft size={20} className="text-typography-900" />
          </Pressable>
        ) : (
          showLogo && (
            <Image 
              source={require('@/assets/images/logo.png')}
              className="w-10 h-10 rounded-lg"
              alt="Gomic Logo"
            />
          )
        )}
        
        <VStack className="gap-0">
          <Heading
            size="3xl"
            className="text-typography-900 font-black tracking-tighter"
          >
            {title}<Text className="text-primary-500 font-black">{title === "Go" ? "mic." : ""}</Text>
          </Heading>
          {subtitle && (
            <Text className="text-typography-400 font-bold text-[8px] uppercase tracking-[3px]">
              {subtitle}
            </Text>
          )}
        </VStack>
      </HStack>
      
      {rightElement ? rightElement : (
        showAvatar && (
          <Pressable className="bg-background-50 p-1 rounded-full border-2 border-primary-100 shadow-sm active:scale-90 transition-all overflow-hidden">
            <Image 
              source={{ uri: 'https://avatar.vercel.sh/gomic' }}
              className="w-11 h-11 rounded-full"
              alt="User Avatar"
            />
          </Pressable>
        )
      )}
    </HStack>
  )
}
