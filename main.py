# coding:utf-8 -*-
# 15:00自动抓取前日数据   15:00抓取当日数据
#ic if ih im 合约代号
if300NamesAry=['IF2305','IF2306','IF2309' ,"IF2312"]
ic500NamesAry=['IC2305',"IC2306" ,'IC2309' ,'IC2312']
ih50NamesAry= ['IH2305' ,'IH2306', 'IH2309' ,"IH2312"]
im1000NamesAry=['IM2305' ,'IM2306','IM2309' ,'IM2312']


import re
import requests
import datetime 

WebTime=""
headers={
    'User-Agent':"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
}
p01=re.compile( r'.*[(](.*)[)];', re.S)
urlDsp= r'''https://datacenter-web.eastmoney.com/api/data/v1/get?callback=jQuery1123036624060758837484_1683883864091&reportName=RPT_FUTU_DAILYPOSITION&columns=ALL&filter=(SECURITY_CODE="IC2312")(TRADE_DATE='2023-05-12')(TYPE="0")(SPRANK<>9999)&sortTypes=1&sortColumns=SPRANK&pageNumber=1&pageSize=20&source=WEB&client=WEB&_=1683883864115'''
urlDsp = urlDsp.replace(" ", "%20")
urlDsp = urlDsp.replace(r'"', "%22")
urlDsp = urlDsp.replace(r"'", "%27")
urlDsp = urlDsp.replace(r"<", "%3C")
urlDsp = urlDsp.replace(r">", "%3E")

__date001=datetime.datetime.today() 

def getUrlDictObj( url ,  IXX):
    global  urlDsp,__date001
    tmpDate="{}-{}-{}".format(__date001.year , __date001.month ,__date001.day)
    urlDsp_001=urlDsp.replace("2023-05-12", tmpDate)
    urlDsp_001=urlDsp_001.replace( "IC2312", IXX)
    srcHtml = requests.get(urlDsp_001, headers=headers)
    html= srcHtml.text
    txt=re.findall( p01 , html)[0].replace("null" , "None")
    txt=txt.replace("true" , "True")
    txt=txt.replace("false" , "False")
    dataJson01=eval(txt )
    return dataJson01['result']

flage47_=0
print ('process is runing...')
while getUrlDictObj( urlDsp, "IF2305") is None and getUrlDictObj( urlDsp, "IF2306") is None and getUrlDictObj( urlDsp, "IF2309") is None and getUrlDictObj( urlDsp, "IF2312") is None and flage47_<9:
    __date001=__date001-datetime.timedelta(1)
    flage47_+=1
    
def GetZhongXinGuoTai( IXX):   
    global  WebTime 
    dataJson01=getUrlDictObj( urlDsp, IXX ) 
    if dataJson01 is None:
        return ['中信期货', IXX,0,0,0,0] , ['国泰君安', IXX,0,0,0,0]
    ZXQH=[]
    GTQH=[]
    data001=dataJson01['data']            
    for i in data001:
        if WebTime=="" : WebTime=i['TRADE_DATE'].split(" ")[0]
        varLpos=i['LONG_POSITION'] if i['LONG_POSITION'] is not None else 0#多单  总多单            
        varLpChange=i['LP_CHANGE'] if i['LP_CHANGE'] is not None else 0# 增减 增加
        varSpos=i['SHORT_POSITION'] if i['SHORT_POSITION'] is not None else 0
        varSpChange =i['SP_CHANGE'] if i['SP_CHANGE']  is not None else 0
        
        varName=i['MEMBER_NAME_ABBR'] if i['MEMBER_NAME_ABBR']  is not None else " "
        
        if ('中信期货' in varName)==True:
            ZXQH=[i['MEMBER_NAME_ABBR'] , IXX , varLpos ,     varLpChange , varSpos , varSpChange]
        if ('国泰君安' in  varName)==True:
            GTQH=[i['MEMBER_NAME_ABBR'] , IXX , varLpos ,     varLpChange , varSpos , varSpChange]   

    return ZXQH , GTQH



zxim1000=[]
gtim1000=[]
for i in im1000NamesAry:    
    A,B=GetZhongXinGuoTai(  i)
    zxim1000.append(A)
    gtim1000.append(B)
print ('im 和约完成 ')
    
zxih50=[]
gtih50=[]
for i in ih50NamesAry:    
    A,B=GetZhongXinGuoTai(  i)
    zxih50.append(A)
    gtih50.append(B)
print ('ih 和约完成 ')

zxif300=[]
gtif300=[]
for i in if300NamesAry:    
    A,B=GetZhongXinGuoTai(  i)
    zxif300.append(A)
    gtif300.append(B)
print ('if 和约完成 ')    
    
zxic500=[]
gtic500=[]
for i in ic500NamesAry:    
    A,B=GetZhongXinGuoTai(  i)
    zxic500.append(A)
    gtic500.append(B)
print ('ic 和约完成 ')

ic500Code=[]
ic500Lp=[]
ic500Lc=[]
ic500Sp=[]
ic500Sc=[]

if300Code=[]
if300Lp=[]
if300Lc=[]
if300Sp=[]
if300Sc=[]

ih50Code=[]
ih50Lp=[]
ih50Lc=[]
ih50Sp=[]
ih50Sc=[]

im1000Code=[]
im1000Lp=[]
im1000Lc=[]
im1000Sp=[]
im1000Sc=[]


zxOrGt=[i[0] for i in zxic500 ] +   [" "]+ [""] + ["国泰君安"]+[i[0]  for i in gtic500]+[" "]
ic500Code=[i[1] for i in zxic500 ] +['合计']+ [""] + ["ic500"]+[i[1]  for i in gtic500]+['合计']

var01=[i[2] for i in zxic500 ] ;var02=[i[2]  for i in gtic500]
ic500Lp=var01+[sum(var01)] + [""] +["ic多持"]+var02 + [sum(var02)] 

var01= [i[3] for i in zxic500 ];var02=[i[3]  for i in gtic500]
ic500Lc=var01+[sum(var01)] + [""] +["ic增减"]+var02 + [sum(var02)] 
k=4
var01= [i[k] for i in zxic500 ];var02=[i[k]  for i in gtic500]
ic500Sp=var01+[sum(var01)] + [""] +["ic空持"]+var02 + [sum(var02)] 
k=5
var01= [i[k] for i in zxic500 ];var02=[i[k]  for i in gtic500]
ic500Sc=var01+[sum(var01)] + [""] +["ic增减"]+var02 +[sum(var02)] 


k=1
var01= [i[k] for i in zxif300 ];var02=[i[k]  for i in gtif300]
if300Code=var01 +['合计']+ [""] +["if300"]+var02 + ['合计']
k=2
var01= [i[k] for i in zxif300 ];var02=[i[k]  for i in gtif300]
if300Lp=var01+[sum(var01)] + [""] +["if多持"]+var02 +[sum(var02)] 
k=3
var01= [i[k] for i in zxif300 ];var02=[i[k]  for i in gtif300]
if300Lc=var01+[sum(var01)] + [""] +["if增减"]+var02 +[sum(var02)] 
k=4
var01=[i[k] for i in zxif300 ] ;var02=[i[k]  for i in gtif300]
if300Sp=var01+[sum(var01)] + [""]+["if空持"]+var02 +[sum(var02)] 
k=5
var01= [i[k] for i in zxif300 ];var02=[i[k]  for i in gtif300]
if300Sc=var01+[sum(var01)] + [""]+["if增减"]+var02 +[sum(var02)] 

k=1
var01=[i[k] for i in zxih50 ]  ;var02=[i[k]  for i in gtih50]
ih50Code=var01+ ['合计']+ [""]+["ih50"] +var02 + ['合计']

k=2
var01= [i[k] for i in zxih50 ];var02=[i[k]  for i in gtih50]
ih50Lp=var01+[sum(var01)] + [""]+["ih多持"] +var02 +[sum(var02)] 
k=3
var01= [i[k] for i in zxih50 ] ;var02=[i[k]  for i in gtih50]
ih50Lc=var01+[sum(var01)] +[""]+["ih增减"] +var02 +[sum(var02)] 
k=4
var01=[i[k] for i in zxih50 ] ;var02=[i[k]  for i in gtih50]
ih50Sp=var01+[sum(var01)] + [""]+["ih空持"]+var02 +[sum(var02)] 
k=5
var01= [i[k] for i in zxih50 ] ;var02=[i[k]  for i in gtih50]
ih50Sc=var01+[sum(var01)] + [""] +["ih增减"]+var02 +[sum(var02)] 

k=1
var01=[i[k] for i in zxim1000 ] ;var02=[i[k]  for i in gtim1000]
im1000Code= var01  +['合计']+ [""]+["im1000"]+var02 + ['合计']

k=2
var01= [i[k] for i in zxim1000 ] ;var02=[i[k]  for i in gtim1000]
im1000Lp=var01+[sum(var01)] + [""]+["im多持"] +var02 +[sum(var02)] 
k=3
var01=[i[k] for i in zxim1000]  ;var02=[i[k]  for i in gtim1000]
im1000Lc=var01 +[sum(var01)]+ [""] +["im增减"]+var02 +[sum(var02)] 
k=4
var01=[i[k] for i in zxim1000]  ;var02=[i[k]  for i in gtim1000]
im1000Sp= var01 +[sum(var01)]+ [""]+["im空持"] +var02 +[sum(var02)] 
k=5
var01=[i[k] for i in zxim1000] ;var02=[i[k]  for i in gtim1000]
im1000Sc=var01+[sum(var01)] + [""] +["im增减"]+var02 + [sum(var02)]  



xlsxLinePrex_='\t\t\t\t'

empColumns=['日期:'+WebTime, 'ic500','ic多持', 'ic多增减', 'ic空持', 'ic空增减',
                    'if300', 'if多持', 'if多增减', 'if空持', 'if空增减',
                    'ih50','ih多持', 'ih多增减', 'ih空持', 'ih空增减',
                    'im1000','im多持','im多增减', 'im空持', 'im空增减' ] 

xlsxFilePath= WebTime+'持仓统计_py_.xlsx'
with open( xlsxFilePath , 'a', encoding='gbk') as fo:
    rst=xlsxLinePrex_
    for i in empColumns:
        rst+=i+'\t'
    fo.write( rst+ '\n')
    fo.close()
    
    
zhongxinguotaichicang= {'名称':zxOrGt , 'ic500':ic500Code    ,'ic多持':ic500Lp ,    'ic多增减': ic500Lc,    'ic空持':ic500Sp,    'ic空增减': ic500Sc,
                'if300':if300Code   , 'if多持':if300Lp ,    'if多增减': if300Lc,    'if空持':if300Sp,    'if空增减': if300Sc,
                'ih50':ih50Code      ,'ih多持':ih50Lp  ,       'ih多增减': ih50Lc,    'ih空持':ih50Sp,     'ih空增减': ih50Sc,
                'im1000':im1000Code  ,'im多持':im1000Lp  ,'im多增减': im1000Lc  ,     'im空持':im1000Sp,         'im空增减': im1000Sc }
               
zhongxinguotaichicangcolumns=[ '名称','ic500','ic多持',    'ic多增减',    'ic空持',    'ic空增减',
                         'if300','if多持',    'if多增减',    'if空持',    'if空增减',
                         'ih50','ih多持',     'ih多增减',    'ih空持',     'ih空增减',
                         'im1000','im多持',   'im多增减',    'im空持',      'im空增减']

with open( xlsxFilePath , 'a', encoding='gbk') as fo:
    rst=[zhongxinguotaichicang[i]  for i in zhongxinguotaichicangcolumns ]
    ln,hn=len(rst) , len(rst[0])
    for k in range(hn):
        tmp=xlsxLinePrex_
        for i in range(ln) :
            tmp+=str( rst[i][k])+'\t'
        fo.write(tmp+'\n')
    fo.close()
    


######################################################

p01=re.compile( r'.*[(](.*)[)];', re.S)

def GetTop20( IXX ):
    global  __date001
    urhl02='''https://datacenter-web.eastmoney.com/api/data/v1/get?callback=jQuery11230646406389561015_1683872650997&reportName=RPT_FUTU_DAILYPOSITION&columns=ALL&filter=(SECURITY_CODE%3D%22IH2309%22)(TRADE_DATE%3D%272023-05-11%27)(TYPE%3D%222%22)(VOLUMERANK%3C%3E9999)&sortTypes=1&sortColumns=VOLUMERANK&source=WEB&client=WEB&_=1683872651016'''
    tmpDate="{}-{}-{}".format(__date001.year , __date001.month ,__date001.day)
    urhl02=urhl02.replace("2023-05-11", tmpDate)
    urhl02=urhl02.replace( "IH2309", IXX)
    
    srcHtml = requests.get(urhl02, headers=headers)
    html= srcHtml.text
    txt=re.findall( p01 , html)[0].replace("null" , "None")
    txt=txt.replace("true" , "True")
    txt=txt.replace("false" , "False")
    dataJson01=eval(txt )
    
    if dataJson01['result'] is None :  
            return ["top20存量" , IXX, 0  , 0, 0 , 0  ],['top20变量',IXX,0,0]
                
    for i in dataJson01['result']['data']:                            
        if i["MEMBER_NAME_ABBR"]=="本日合计" : 
            varLpos=i['LONG_POSITION'] if i['LONG_POSITION'] is not None else 0#多单  总多单            
            varSpos=i['SHORT_POSITION'] if i['SHORT_POSITION'] is not None else 0
            varLpC=i['LP_CHANGE'] if i['LP_CHANGE'] is not None else 0
            varSpC=i['SP_CHANGE'] if i['SP_CHANGE'] is not None else 0                  
        if i["MEMBER_NAME_ABBR"]=="总量增减" : 
            varLpChange=i['LONG_POSITION'] if i['LONG_POSITION'] is not None else 0# 增减 增加
            varSpChange =i['SHORT_POSITION'] if i['SHORT_POSITION']  is not None else 0
    return [["top20存量" , IXX, varLpos  , varLpChange, varSpos , varSpChange  ],['top20变量',IXX,varLpC,varSpC] ]



ifT20Bom=[]  
ifTop20CgTd=[]
for i  in if300NamesAry:    
    vartmp1,vartmp2=GetTop20(  i) 
    ifTop20CgTd.append( vartmp2 )
    ifT20Bom.append(vartmp1 )
print ( 'if Top20 完成')

icT20Bom=[]  
icTop20CgTd=[]
for i  in ic500NamesAry:    
    vartmp1,vartmp2=GetTop20(  i)
    icTop20CgTd.append( vartmp2)
    icT20Bom.append( vartmp1 )    
print ( 'ic Top20 完成')

ihT20Bom=[]  
ihTop20CgTd=[]
for i  in ih50NamesAry:   
    vartmp1,vartmp2=GetTop20(  i)  
    ihTop20CgTd.append( vartmp2 )
    ihT20Bom.append(vartmp1 )    
print ( 'ih Top20 完成')

imT20Bom=[]  
imTop20CgTd=[]
for i  in im1000NamesAry:  
    vartmp1,vartmp2=GetTop20(  i)   
    imTop20CgTd.append( vartmp2 )
    imT20Bom.append(GetTop20(  i)[0] )   
     
print ( 'im Top20 完成')
k=0
var01=[i[k] for i in ifT20Bom]    
t20Titles =var01+['','','']

k=1
var01=[i[k] for i in icT20Bom] 
ic500Code =var01 +['合计',"",""]
k=2
var01=[i[k] for i in icT20Bom] 
ic500Lp =var01 + [ sum(var01) ]+["",""]
k=3
var01=[i[k] for i in icT20Bom] 
ic500Lc=var01 + [ sum(var01) ]+["",""]
k=4
var01=[i[k] for i in icT20Bom] 
ic500Sp=var01 + [ sum(var01) ]+["",""]
k=5
var01=[i[k] for i in icT20Bom] 
ic500Sc=var01 + [ sum(var01) ]+["",""]

k=1
var01=[i[k] for i in ifT20Bom] 
if300Code=var01 +['合计',"",""]
k=2
var01=[i[k] for i in ifT20Bom] 
if300Lp=var01 + [ sum(var01) ]+["",""]
k=3
var01=[i[k] for i in ifT20Bom] 
if300Lc=var01 + [ sum(var01) ]+["",""]
k=4
var01=[i[k] for i in ifT20Bom] 
if300Sp=var01 + [ sum(var01) ]+["",""]
k=5
var01=[i[k] for i in ifT20Bom] 
if300Sc=var01 + [ sum(var01) ]+["",""]

k=1
var01=[i[k] for i in ihT20Bom] 
ih50Code =var01 +['合计',"",""]
k=2
var01=[i[k] for i in ihT20Bom] 
ih50Lp =var01 + [ sum(var01) ]+["",""]
k=3
var01=[i[k] for i in ihT20Bom] 
ih50Lc=var01 + [ sum(var01) ]+["",""]
k=4
var01=[i[k] for i in ihT20Bom] 
ih50Sp=var01 + [ sum(var01) ]+["",""]
k=5
var01=[i[k] for i in ihT20Bom] 
ih50Sc=var01 + [ sum(var01) ]+["",""]


k=1
var01=[i[k] for i in imT20Bom] 
im1000Code =var01 +["合计","",""]
k=2
var01=[i[k] for i in imT20Bom] 
im1000Lp =var01 + [ sum(var01) ]+["",""]
k=3
var01=[i[k] for i in imT20Bom] 
im1000Lc =var01 + [ sum(var01) ]+["",""]
k=4
var01=[i[k] for i in imT20Bom] 
im1000Sp=var01 + [ sum(var01) ]+["",""]
k=5
var01=[i[k] for i in imT20Bom] 
im1000Sc =var01 + [ sum(var01) ]+["",""]


SpaceList={"名称":[" "] , 'ic500':[" "] , 'ic多持':[" "] , 'ic多增减':[" "] , 'ic空持':[" "] , 'ic空增减':[" "] ,
                    'if300':[" "] , 'if多持':[" "] , 'if多增减':[" "] , 'if空持':[" "] , 'if空增减':[" "] ,
                    'ih50':[" "] , 'ih多持':[" "] , 'ih多增减':[" "] , 'ih空持':[" "] , 'ih空增减':[" "] ,
                    'im1000':[" "] , 'im多持':[" "] , 'im多增减':[" "] , 'im空持':[" "] , 'im空增减':  [" "] 
                    }


SpaceListcolumns=["名称", 'ic500','ic多持', 'ic多增减', 'ic空持', 'ic空增减',
                    'if300', 'if多持', 'if多增减', 'if空持', 'if空增减',
                    'ih50','ih多持', 'ih多增减', 'ih空持', 'ih空增减',
                    'im1000','im多持','im多增减', 'im空持', 'im空增减' 
                    ] 

with open( xlsxFilePath , 'a', encoding='gbk') as fo:
    tmp=xlsxLinePrex_
    for i in SpaceListcolumns:
        tmp+=" "
    fo.write(tmp+'\n')
    fo.close()


t20SumList= {"top20存量":t20Titles ,  'ic500':ic500Code    ,'ic多持':ic500Lp ,    'ic多增减': ic500Lc,    'ic空持':ic500Sp,    'ic空增减': ic500Sc,
                'if300':if300Code   , 'if多持':if300Lp ,    'if多增减': if300Lc,    'if空持':if300Sp,    'if空增减': if300Sc,
                'ih50':ih50Code      ,'ih多持':ih50Lp  ,       'ih多增减': ih50Lc,    'ih空持':ih50Sp,     'ih空增减': ih50Sc,
                'im1000':im1000Code  ,'im多持':im1000Lp  ,'im多增减': im1000Lc  ,     'im空持':im1000Sp,         'im空增减': im1000Sc          
                    }
t20SumColumns=[ "top20存量",  'ic500','ic多持',    'ic多增减',    'ic空持',    'ic空增减',
                            'if300', 'if多持',    'if多增减',    'if空持',    'if空增减',
                            'ih50','ih多持',       'ih多增减',    'ih空持',     'ih空增减',
                            'im1000','im多持','im多增减',     'im空持',         'im空增减'   ] 

with open( xlsxFilePath , 'a', encoding='gbk') as fo:
    rst=xlsxLinePrex_
    for i in t20SumColumns :
        rst+=i+'\t'
    fo.write(rst+'\n')
    fo.close()    
    
with open( xlsxFilePath , 'a', encoding='gbk') as fo:
    rst=[t20SumList[i]  for i in t20SumColumns ]
    ln,hn=len(rst) , len(rst[0])
    for k in range(hn):
        tmp=xlsxLinePrex_
        for i in range(ln) :
            tmp+=str( rst[i][k])+'\t'
        fo.write(tmp+'\n')
    fo.close()
  
with open( xlsxFilePath , 'a', encoding='gbk') as fo:
    rst=""
    for k in range(6):
        rst+='\n'
    fo.write(rst)
    fo.close()

###### top20变量 
t20CgTitles =[i[0] for i in imTop20CgTd ] +[' ']

ic500TpcgCode=[i[1] for i in icTop20CgTd]+['合计']
ic500TpcgLp=[" " for i in icTop20CgTd]+[' ']
ic500TpcgLc=[i[2] for i in icTop20CgTd]
ic500TpcgLc+=[sum( ic500TpcgLc )]
ic500TpcgSp=[" " for i in icTop20CgTd]+[" "]
ic500TpcgSc=[i[3] for i in icTop20CgTd]
ic500TpcgSc+=[sum( ic500TpcgSc )]

if300TpcgCode=[i[1] for i in ifTop20CgTd]+['合计']
if300TpcgLp=[" " for i in ifTop20CgTd]+[' ']
if300TpcgLc=[i[2] for i in ifTop20CgTd]
if300TpcgLc+=[sum( if300TpcgLc )]
if300TpcgSp=[" " for i in ifTop20CgTd]+[' ']
if300TpcgSc=[i[3] for i in ifTop20CgTd]
if300TpcgSc+=[sum( if300TpcgSc )]


ih50TpcgCode=[i[1] for i in ihTop20CgTd]+['合计']
ih50TpcgLp=[" " for i in ihTop20CgTd]+[' ']
ih50TpcgLc=[i[2] for i in ihTop20CgTd]
ih50TpcgLc+=[sum( ih50TpcgLc )]
ih50TpcgSp=[" " for i in ihTop20CgTd]+[' ']
ih50TpcgSc=[i[3] for i in ihTop20CgTd]
ih50TpcgSc+=[sum( ih50TpcgSc )]


im1000TpcgCode=[i[1] for i in imTop20CgTd]+['合计']
im1000TpcgLp=[" " for i in imTop20CgTd]+[' ']
im1000TpcgLc=[i[2] for i in imTop20CgTd]
im1000TpcgLc+=[sum( im1000TpcgLc )]
im1000TpcgSp=[" " for i in imTop20CgTd]+[' ']
im1000TpcgSc=[i[3] for i in imTop20CgTd]
im1000TpcgSc+=[sum( im1000TpcgSc )]


top20ChangeList={'top20变量':t20CgTitles ,  'ic500':ic500TpcgCode    ,'ic多持':ic500TpcgLp ,    'ic多增减': ic500TpcgLc,    'ic空持':ic500TpcgSp,    'ic空增减': ic500TpcgSc,
            'if300':if300TpcgCode   , 'if多持':if300TpcgLp ,    'if多增减': if300TpcgLc,    'if空持':if300TpcgSp,    'if空增减': if300TpcgSc,
            'ih50':ih50TpcgCode      ,'ih多持':ih50TpcgLp  ,       'ih多增减': ih50TpcgLc,    'ih空持':ih50TpcgSp,     'ih空增减': ih50TpcgSc,
            'im1000':im1000TpcgCode  ,'im多持':im1000TpcgLp  ,'im多增减': im1000TpcgLc  ,     'im空持':im1000TpcgSp,         'im空增减': im1000TpcgSc          
                 }

top20Change_Columns=['top20变量', 'ic500','ic多持', 'ic多增减', 'ic空持', 'ic空增减',
         'if300', 'if多持', 'if多增减', 'if空持', 'if空增减',
         'ih50','ih多持', 'ih多增减', 'ih空持', 'ih空增减',
         'im1000','im多持','im多增减', 'im空持', 'im空增减' 
         ]

with open( xlsxFilePath , 'a', encoding='gbk') as fo:
    rst=xlsxLinePrex_
    for i in top20Change_Columns :
        rst+=i+'\t'
    fo.write(rst+'\n')
    fo.close()    
    
with open( xlsxFilePath , 'a', encoding='gbk') as fo:
    rst=[top20ChangeList[i]  for i in top20Change_Columns ]
    ln,hn=len(rst) , len(rst[0])
    for k in range(hn):
        tmp=xlsxLinePrex_
        for i in range(ln) :
            tmp+=str( rst[i][k])+'\t'
        fo.write(tmp+'\n')
    fo.close()

######        
# rst=pandas.concat( [empDateList,zhongxinguotaichicang,empList,empList, t20Sum])
# rst.to_excel( WebTime+'持仓统计_py_.xlsx' ,index=0 )
print ('finished .')