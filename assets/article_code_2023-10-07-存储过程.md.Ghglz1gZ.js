import{_ as L,c as N,o as I,ag as e}from"./chunks/framework.DyQ3i0fn.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"article/code/2023-10-07-存储过程.md","filePath":"article/code/2023-10-07-存储过程.md","lastUpdated":1750044352000}'),F={name:"article/code/2023-10-07-存储过程.md"};function U(r,t,n,d,_,c){return I(),N("div",null,t[0]||(t[0]=[e(`<p>CREATE DEFINER=<code>root</code>@<code>%</code> PROCEDURE <code>ffpfun_calculateincome_2309</code>(p_hid varchar(200) CHARSET utf8) RETURNS varchar(2000) CHARSET utf8 BEGIN</p><p>#定义一个变量用于计录户总人数 DECLARE d_zrs INTEGER DEFAULT 0; #定义一个变量用于计录户类型 DECLARE d_hlx VARCHAR(255); #定义一个错误的变量,类型是整形，默认是0 DECLARE t_error INTEGER DEFAULT 0; #捕获到sql的错误，就设置t_error为1 DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET t_error=1;</p><p>#开启事务 START TRANSACTION;</p><pre><code># 取此户的总人数...	
select IFNULL(jtrks,1),hlx into d_zrs,d_hlx from pcs2309_householdcode where id=p_hid	;

# 为保证算人均时不出错，如果户总人口数小于1，则改为1
IF d_zrs&lt;1 THEN
   SET d_zrs=1;
</code></pre><p>END IF;</p><pre><code># 计算收入情况
# 1.计算D5,D6
update pcs2309_tph_srqk t set t.D5 = IFNULL(t.D5a,0)+IFNULL(t.D5b,0)+IFNULL(t.D5c,0)+IFNULL(t.D5d,0)+IFNULL(t.D5e,0),
														  t.D6 = IFNULL(t.D6a,0)+IFNULL(t.D6b,0)+IFNULL(t.D6c,0)+IFNULL(t.D6d,0)+IFNULL(t.D6e,0)
															      +IFNULL(t.D6f,0)+IFNULL(t.D6g,0)+IFNULL(t.D6h,0)+IFNULL(t.D6i,0)+IFNULL(t.D6j,0)
																		+IFNULL(t.D6k,0)+IFNULL(t.D6l,0)+IFNULL(t.D6m,0)+IFNULL(t.D6n,0)+IFNULL(t.D6o,0)+IFNULL(t.D6p,0)
													where t.hid=p_hid and t.nf=&#39;202309&#39;;
															
# 2.计算各项收入和支出大项
update pcs2309_tph_srqk t set t.A=IFNULL(t.A1,0)+IFNULL(t.A2,0)+IFNULL(t.A3,0)+IFNULL(t.A4,0)+IFNULL(t.A5,0), 
                              t.B=IFNULL(t.B1,0)+IFNULL(t.B2,0)+IFNULL(t.B3,0)+IFNULL(t.B4,0), 
															t.C=IFNULL(t.C1,0)+IFNULL(t.C2,0)+IFNULL(t.C3,0)+IFNULL(t.C4,0)+IFNULL(t.C5,0),
															t.D=IFNULL(t.D1,0)+IFNULL(t.D2,0)+IFNULL(t.D3,0)+IFNULL(t.D4,0)+IFNULL(t.D5,0)+IFNULL(t.D6,0),
															t.E=IFNULL(t.E1,0)+IFNULL(t.E2,0)+IFNULL(t.E3,0)+IFNULL(t.E4,0)
													where t.hid=p_hid and t.nf=&#39;202309&#39;;

# 3.计算总计
update pcs2309_tph_srqk t set t.nzsr = IFNULL(t.A,0)+IFNULL(t.B,0)+IFNULL(t.C,0)+IFNULL(t.D,0),
														  t.ncsr = IFNULL(t.A,0)+IFNULL(t.B,0)+IFNULL(t.C,0)+IFNULL(t.D,0) - IFNULL(t.E,0),
															t.rjcsr = (IFNULL(t.A,0)+IFNULL(t.B,0)+IFNULL(t.C,0)+IFNULL(t.D,0) - IFNULL(t.E,0)) /d_zrs																
															where t.hid=p_hid and t.nf=&#39;202309&#39;;
									
# 4.如果是监测户，计算纳入监测收入范围
IF d_hlx=&#39;100B02002&#39; THEN
	 update pcs2309_tph_srqk t set t.zsrckfw = IFNULL(t.ncsr,0) + IFNULL(t.lpsr,0) - IFNULL(t.hgzfzc,0),
																 t.rjsrckfw = (IFNULL(t.ncsr,0) + IFNULL(t.lpsr,0) - IFNULL(t.hgzfzc,0)) /d_zrs
															where t.hid=p_hid and t.nf=&#39;202309&#39;;
END IF;
</code></pre><p>#如果捕获到错误 IF t_error=1 THEN #回滚 ROLLBACK; ELSE #提交 COMMIT; END IF; END</p>`,7)]))}const p=L(F,[["render",U]]);export{D as __pageData,p as default};
