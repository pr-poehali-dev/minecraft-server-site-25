import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface Player {
  rank: number;
  name: string;
  level: number;
  score: number;
  avatar: string;
}

interface Guild {
  rank: number;
  name: string;
  members: number;
  score: number;
  tag: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const topPlayers: Player[] = [
    { rank: 1, name: 'SteveTheMiner', level: 87, score: 145230, avatar: '⛏️' },
    { rank: 2, name: 'CreeperHunter', level: 82, score: 138940, avatar: '🗡️' },
    { rank: 3, name: 'EnderDragonSlayer', level: 79, score: 132100, avatar: '🐉' },
    { rank: 4, name: 'DiamondKing', level: 75, score: 128450, avatar: '💎' },
    { rank: 5, name: 'RedstoneWizard', level: 73, score: 124890, avatar: '🔴' },
  ];

  const topGuilds: Guild[] = [
    { rank: 1, name: 'Legends of Craft', members: 48, score: 892340, tag: 'LOC' },
    { rank: 2, name: 'Blocky Warriors', members: 45, score: 856720, tag: 'BWR' },
    { rank: 3, name: 'Pixel Knights', members: 42, score: 834190, tag: 'PKN' },
    { rank: 4, name: 'Diamond Dynasty', members: 39, score: 798230, tag: 'DDY' },
    { rank: 5, name: 'Nether Raiders', members: 36, score: 765440, tag: 'NTR' },
  ];

  const serverRules = [
    { title: 'Не используй читы', description: 'Честная игра - залог удовольствия для всех' },
    { title: 'Уважай других игроков', description: 'Будь вежлив и дружелюбен в чате' },
    { title: 'Не гриферь', description: 'Разрушение построек других игроков запрещено' },
    { title: 'Не спамь', description: 'Используй чат для нормального общения' },
    { title: 'Слушай администрацию', description: 'Следуй указаниям модераторов и админов' },
  ];

  const shopItems = [
    { name: 'VIP статус', price: '299₽', period: '/месяц', features: ['Уникальный префикс', 'Доступ к /fly', '5 привилегий'] },
    { name: 'Premium статус', price: '499₽', period: '/месяц', features: ['VIP привилегии', 'Кастомные скины', '10 привилегий'] },
    { name: 'ELITE статус', price: '999₽', period: '/месяц', features: ['Premium привилегии', 'Свой NPC', 'Безлимит'] },
  ];

  const teamMembers = [
    { name: 'Notch_Official', role: 'Основатель', emoji: '👑' },
    { name: 'Alex_Admin', role: 'Главный админ', emoji: '⚔️' },
    { name: 'Steve_Moderator', role: 'Модератор', emoji: '🛡️' },
    { name: 'Herobrine_Dev', role: 'Разработчик', emoji: '💻' },
  ];

  const news = [
    { date: '15 октября 2024', title: 'Обновление 2.0', description: 'Новые биомы, мобы и предметы!' },
    { date: '10 октября 2024', title: 'Турнир гильдий', description: 'Призовой фонд 50,000₽' },
    { date: '5 октября 2024', title: 'Хэллоуин ивент', description: 'Специальные квесты и награды' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-3xl pixel-corners">
                ⛏️
              </div>
              <span className="text-3xl font-bold text-primary text-stroke">CRAFTWORLD</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              {['home', 'rules', 'shop', 'team', 'news', 'contacts'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(section)}
                  className="pixel-corners font-semibold uppercase text-sm"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'rules' && 'Правила'}
                  {section === 'shop' && 'Магазин'}
                  {section === 'team' && 'Команда'}
                  {section === 'news' && 'Новости'}
                  {section === 'contacts' && 'Контакты'}
                </Button>
              ))}
            </div>
            <Button className="pixel-corners bg-primary hover:bg-primary/90 text-primary-foreground font-bold animate-pulse-glow">
              ИГРАТЬ
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-stroke">
              ДОБРО ПОЖАЛОВАТЬ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Лучший Minecraft сервер для выживания и PvP
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Card className="pixel-corners bg-card/80 border-2 border-primary">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary">1,247</div>
                  <div className="text-sm text-muted-foreground">Игроков онлайн</div>
                </CardContent>
              </Card>
              <Card className="pixel-corners bg-card/80 border-2 border-secondary">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Работает без перебоев</div>
                </CardContent>
              </Card>
              <Card className="pixel-corners bg-card/80 border-2 border-accent">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-accent">15ms</div>
                  <div className="text-sm text-muted-foreground">Средний пинг</div>
                </CardContent>
              </Card>
            </div>
            <div className="bg-card/60 inline-block px-6 py-3 pixel-corners border-2 border-primary/50">
              <code className="text-primary text-lg font-mono">play.craftworld.ru</code>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary text-stroke">РЕЙТИНГИ</h2>
            <Tabs defaultValue="players" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 pixel-corners bg-card h-14">
                <TabsTrigger value="players" className="pixel-corners font-bold text-base">
                  🏆 ТОП ИГРОКОВ
                </TabsTrigger>
                <TabsTrigger value="guilds" className="pixel-corners font-corners font-bold text-base">
                  ⚔️ ТОП ГИЛЬДИЙ
                </TabsTrigger>
              </TabsList>
              <TabsContent value="players" className="mt-6">
                <Card className="pixel-corners bg-card/80 border-2 border-primary">
                  <ScrollArea className="h-[400px]">
                    <CardContent className="p-6">
                      {topPlayers.map((player) => (
                        <div
                          key={player.rank}
                          className="flex items-center justify-between p-4 mb-3 bg-background/50 pixel-corners hover:bg-primary/10 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 flex items-center justify-center text-2xl pixel-corners font-bold ${
                              player.rank === 1 ? 'bg-accent text-accent-foreground' :
                              player.rank === 2 ? 'bg-muted text-muted-foreground' :
                              player.rank === 3 ? 'bg-destructive/60 text-destructive-foreground' :
                              'bg-card text-card-foreground'
                            }`}>
                              #{player.rank}
                            </div>
                            <div className="text-3xl">{player.avatar}</div>
                            <div>
                              <div className="font-bold text-lg">{player.name}</div>
                              <div className="text-sm text-muted-foreground">Уровень {player.level}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{player.score.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">очков</div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </ScrollArea>
                </Card>
              </TabsContent>
              <TabsContent value="guilds" className="mt-6">
                <Card className="pixel-corners bg-card/80 border-2 border-secondary">
                  <ScrollArea className="h-[400px]">
                    <CardContent className="p-6">
                      {topGuilds.map((guild) => (
                        <div
                          key={guild.rank}
                          className="flex items-center justify-between p-4 mb-3 bg-background/50 pixel-corners hover:bg-secondary/10 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 flex items-center justify-center text-2xl pixel-corners font-bold ${
                              guild.rank === 1 ? 'bg-accent text-accent-foreground' :
                              guild.rank === 2 ? 'bg-muted text-muted-foreground' :
                              guild.rank === 3 ? 'bg-destructive/60 text-destructive-foreground' :
                              'bg-card text-card-foreground'
                            }`}>
                              #{guild.rank}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <div className="font-bold text-lg">{guild.name}</div>
                                <Badge className="pixel-corners bg-secondary/20 text-secondary border-secondary">
                                  {guild.tag}
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground">{guild.members} участников</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-secondary">{guild.score.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">очков</div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </ScrollArea>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-background/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-primary text-stroke">ПРАВИЛА СЕРВЕРА</h2>
          <div className="grid gap-4">
            {serverRules.map((rule, index) => (
              <Card key={index} className="pixel-corners bg-card/80 border-2 border-primary/30 hover:border-primary transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <span className="text-3xl">{index + 1}</span>
                    {rule.title}
                  </CardTitle>
                  <CardDescription className="text-base">{rule.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-accent text-stroke">МАГАЗИН</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {shopItems.map((item, index) => (
              <Card key={index} className="pixel-corners bg-card/80 border-2 border-accent/30 hover:border-accent hover:scale-105 transition-all animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader>
                  <CardTitle className="text-3xl">{item.name}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-accent">{item.price}</span>
                    <span className="text-muted-foreground">{item.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full pixel-corners bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg h-12">
                    КУПИТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-background/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-secondary text-stroke">НАША КОМАНДА</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="pixel-corners bg-card/80 border-2 border-secondary/30 hover:border-secondary transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="text-7xl mb-4 animate-float">{member.emoji}</div>
                  <div className="text-2xl font-bold mb-2">{member.name}</div>
                  <Badge className="pixel-corners bg-secondary/20 text-secondary border-secondary text-base px-4 py-1">
                    {member.role}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-primary text-stroke">НОВОСТИ</h2>
          <div className="space-y-6">
            {news.map((item, index) => (
              <Card key={index} className="pixel-corners bg-card/80 border-2 border-primary/30 hover:border-primary transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="pixel-corners bg-primary/20 text-primary border-primary">
                      {item.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl">{item.title}</CardTitle>
                  <CardDescription className="text-lg">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-background/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-12 text-primary text-stroke">КОНТАКТЫ</h2>
          <Card className="pixel-corners bg-card/80 border-2 border-primary">
            <CardContent className="p-12">
              <div className="space-y-8">
                <div>
                  <div className="text-lg text-muted-foreground mb-2">IP адрес сервера</div>
                  <code className="text-3xl font-mono text-primary font-bold">play.craftworld.ru</code>
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Button variant="outline" size="lg" className="pixel-corners border-2 gap-2">
                    <Icon name="MessageCircle" size={24} />
                    Discord
                  </Button>
                  <Button variant="outline" size="lg" className="pixel-corners border-2 gap-2">
                    <Icon name="Send" size={24} />
                    Telegram
                  </Button>
                  <Button variant="outline" size="lg" className="pixel-corners border-2 gap-2">
                    <Icon name="Users" size={24} />
                    VK
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t-4 border-primary">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-lg">© 2024 CraftWorld. Лучший Minecraft сервер России</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
