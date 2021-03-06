module.exports = {
    rankList: [
        {
            id: 0,
            level: '一级',
            disc: '美国地域广阔，横跨多个气候带。从佛罗里达南部的亚热带到密歇根的温带大陆性气候，美国多样的气候使得美国的自然风景多样而美丽。科罗拉多大峡谷的雄伟，尼亚加拉大瀑布的气势;在人文方面，好来坞的浪漫，迪斯尼乐园的轻松，赌城拉斯维加斯的辉煌等等都令人神往不已。',
            name: '世界十大旅游国家',
            class: '旅游',
            star: '热门',
            who: '贱贱',
            children: [
                {
                    id: 0,
                    name: '美国'
                },
                {
                    id: 1,
                    name: '中国'
                }
            ]
        },
        {
            id: 1,
            level: '一级',
            disc: '《皇室战争》是一款以《部落冲突》为背景的手机卡牌策略游戏，玩家需要根据手中的卡牌进行组合，并与同级竞技场的玩家进行1V1对战。对战双方各自都有一座国王塔及两座防卫箭塔，限时3分钟，攻下一座箭塔可获得一个皇冠，直接攻下国王塔可获取胜利。如果双方在时间结束前仍未分出胜负，那么会进行加时赛，并以谁先破掉一座塔(箭塔和国王塔都可)为优胜条件，倘若加时阶段也未分出胜负，那么双方打平，各自不会获得圣杯奖励',
            name: '五大手游',
            who: '贱贱',
            star: '话题',
            class: '游戏',
            children: [
                {
                    id: 0,
                    name: '王者荣耀'
                },
                {
                    id: 1,
                    name: '斗地主'
                },
                {
                    id: 2,
                    name: '跳一跳'
                },
                {
                    id: 3,
                    name: '阴阳师'
                },
                {
                    id: 4,
                    name: '绝地求生'
                },
            ]
        }
    ],
    belong: [
        {
            id: 0,
            name: '旅游'
        },
        {
            id: 0,
            name: '生活'
        },
        {
            id: 0,
            name: '地理'
        },
        {
            id: 0,
            name: '美食'
        },
        {
            id: 0,
            name: '动漫'
        },
        {
            id: 0,
            name: '游戏'
        },
        {
            id: 0,
            name: '美女'
        },
        {
            id: 0,
            name: '名胜'
        },
        {
            id: 0,
            name: '大保健'
        },
    ],
    ele: [
        {
            id: 0,
            name: '火影忍者'
        },
        {
            id: 0,
            name: '灌篮高手'
        },
        {
            id: 0,
            name: '海贼王'
        },
        {
            id: 0,
            name: '妖精的尾巴'
        },
        {
            id: 0,
            name: '死神'
        },
    ],
    sidebar: [
        {
            name: '榜单管理',
            where: 'rankList'
        },
        {
            name: '推送任务',
            where: 'pushTask'
        },
        {
            name: '元素列表',
            where: 'elementList'
        },
        {
            name: 'POST列表',
            where: 'post'
        },
        {
            name: '上下级管理',
            where: 'levelCtrl'
        },
        {
            name: '权限管理',
            where: 'rankList'
        },

    ]
}