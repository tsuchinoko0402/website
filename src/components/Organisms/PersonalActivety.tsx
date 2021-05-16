import {
  Avatar,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const useStyles = makeStyles((theme: Theme) => ({
  scoutAvatar: {
    backgroundColor: "#a0d8ef",
    width: theme.spacing(6),
    height: theme.spacing(6),
    padding: `4px`,
  },
  scoutPaper: {
    backgroundColor: "#e0ffff",
  },
  tromboneAvatar: {
    backgroundColor: "#e6afcf",
    width: theme.spacing(6),
    height: theme.spacing(6),
    padding: `4px`,
  },
  trombonePaper: {
    backgroundColor: "#ffffe0",
  },
  paragraph: {
    padding: `10px`,
  },
}))

const Profile: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container direction="column" justify="flex-start" spacing={2}>
      <Grid item>
        <Paper className={classes.scoutPaper}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Avatar className={classes.scoutAvatar}>
                <StaticImage src="../../images/scout-hat.svg" alt="ScoutHat" />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h5" color="textPrimary" component="p">
                ボーイスカウト
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                component="p"
                className={classes.paragraph}
              >
                地域の青少年育成に携わっています。子供の時からスカウトとしての経験を積み、現在では指導者として活動しています。
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                component="p"
                className={classes.paragraph}
              >
                現在の所属：
                <Link
                  to="https://www.scout.or.jp/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  日本ボーイスカウト
                </Link>
                &ensp;
                <Link
                  to="http://www.bs-hyogo.gr.jp/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  兵庫連盟
                </Link>
                &ensp;
                <Link
                  to="https://www.bs-hanshin-sakura.org/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  阪神さくら地区
                </Link>
                &ensp;
                <Link
                  to="https://bs-ashiya3.org/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  芦屋第3団
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.paragraph}>
            <Typography variant="h6" color="textPrimary" component="p">
              スカウト歴, 隊・団役務歴
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              <ul>
                <li>2001年10月：カブスカウトに入隊</li>
                <li>2003年9月：ボーイスカウト隊に上進</li>
                <li>2007年7月：菊スカウト章受章</li>
                <li>2007年9月：ベンチャースカウト隊に上進</li>
                <li>2011年3月：富士スカウト章受章</li>
                <li>
                  2011年4月：ローバースカウト隊に上進、ボーイスカウト隊副長補に就任
                </li>
                <li>
                  2012年3月：富士スカウト代表表敬訪問（文部科学省、首相官邸）に参加
                </li>
                <li>2013年9月〜：ボーイスカウト隊副長</li>
                <li>2015年9月〜：ボーイスカウト隊隊長</li>
                <li>2017年9月〜：ボーイスカウト隊副長</li>
                <li>2018年1月〜現在：副団委員長</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item className={classes.paragraph}>
            <Typography variant="h6" color="textPrimary" component="p">
              地区・県連等役務歴
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              <ul>
                <li>2013年4月〜2014年3月：地区ユース委員</li>
                <li>2014年4月〜2020年3月：地区ユース委員長、県ユース委員</li>
                <li>2020年4月〜現在：地区広報委員長</li>
                <li>2020年7月〜現在：兵庫ローバース（HRS）アドバイザー</li>
                <li>2021年1月〜現在：県副コミッショナー（主にローバー担当）</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item className={classes.paragraph}>
            <Typography variant="h6" color="textPrimary" component="p">
              スカウト歴, 隊・団役務歴
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              <ul>
                <li>2001年10月：カブスカウトに入隊</li>
                <li>2003年9月：ボーイスカウト隊に上進</li>
                <li>2007年7月：菊スカウト章受章</li>
                <li>2007年9月：ベンチャースカウト隊に上進</li>
                <li>2011年3月：富士スカウト章受章</li>
                <li>
                  2011年4月：ローバースカウト隊に上進、ボーイスカウト隊副長補に就任
                </li>
                <li>
                  2012年3月：富士スカウト代表表敬訪問（文部科学省、首相官邸）に参加
                </li>
                <li>2013年9月〜：ボーイスカウト隊副長</li>
                <li>2015年9月〜：ボーイスカウト隊隊長</li>
                <li>2017年9月〜：ボーイスカウト隊副長</li>
                <li>2018年1月〜現在：副団委員長</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item className={classes.paragraph}>
            <Typography variant="h6" color="textPrimary" component="p">
              指導者研修歴
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              <ul>
                <li>2011年6月：第982回ボーイスカウト講習会　修了</li>
                <li>2014年4月：ウッドバッジ研修所 BS課程 愛知116期　修了</li>
                <li>2014年12月：安全セミナー 兵庫第6回　修了</li>
                <li>
                  2016年10月：ウッドバッジ実修所 BS課程 第191期
                  第2教程（プログラムトレーニング）　修了
                </li>
                <li>2017年9月：ウッドバッジ実修所 第3教程（実務訓練） 修了</li>
                <li>2018年4月：団委員研修所 神奈川第33期　修了</li>
                <li>2019年10月：団委員実修所 第26期 第2教程　修了</li>
                <li>2020年10月：団委員実修所 第3教程　修了</li>
              </ul>
            </Typography>
          </Grid>
        </Paper>
      </Grid>

      <Grid item>
        <Paper className={classes.trombonePaper}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Avatar className={classes.tromboneAvatar}>
                <StaticImage src="../../images/trombone.svg" alt="Trombone" />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h5" color="textPrimary" component="p">
                トロンボーン演奏
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                component="p"
                className={classes.paragraph}
              >
                中学に吹奏楽に入って以来、細々と続けています。最初はテナーバストロンボーンでしたが、大学以降はバストロンボーンを中心に吹いています。一応、マイ楽器は2台です。
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.paragraph}>
            <Typography variant="h6" color="textPrimary" component="p">
              所属歴
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              <ul>
                <li>
                  2005年4月：中高一貫校の音楽部（吹奏楽部）に入部。トロンボーン担当となる。
                </li>
                <li>
                  2011年4月：大学の交響楽団に入団。バストロンボーン担当となる。
                </li>
                <li>
                  2015年4月：
                  <Link
                    to="https://newphilosaka.wixsite.com/home"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    ニューフィルハーモニック大阪
                  </Link>
                  にバストロンボーン奏者として入団。
                </li>
                <li>
                  2015年5月：
                  <Link
                    to="http://kgwind.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    King's Gambit Wind Orchestra
                  </Link>
                  の定期演奏会への出演をきっかけに、バストロンボーン奏者として入団。時々棒を振ります。
                </li>
              </ul>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Profile
