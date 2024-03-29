export interface Tab {
        name: string,
        value: ('file' | 'url')[],
}
export const tabs: Tab[] = [
        { name: 'From This Device', value: ['file'] },
        { name: 'From the Web', value: ['url'] },
        { name: 'Both', value: ['file', 'url'] },
];

export const markup = `
<table style="width: 66.0118%;">
<tbody>
<tr>
<td style="width: 23.8741%;">&nbsp;</td>
<td style="width: 40.1259%;">
<p><strong>&nbsp;</strong></p>
</td>
</tr>
<tr>
<td style="text-align: center; width: 23.8741%;">
<p><strong>&nbsp;</strong></p>
<p><strong>C&Ocirc;NG TY CỔ PHẦN</strong></p>
<p><strong>GIẢI PH&Aacute;P C&Ocirc;NG NGHỆ GD VIỆT NAM</strong></p>
<p><strong>-----------------------</strong></p>
</td>
<td style="text-align: center; width: 40.1259%;">
<p><strong>CỘNG H&Ograve;A X&Atilde; HỘI CHỦ NGHĨA VIỆT NAM</strong></p>
<p><strong>Độc lập &ndash; Tự do &ndash; Hạnh ph&uacute;c</strong></p>
<p><strong>-----------------------</strong></p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td style="width: 64%;" colspan="2">
<p style="text-align: right;"><em>TP Hồ Ch&iacute; Minh, ng&agrave;y 13 th&aacute;ng 03 năm 2024</em></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;&nbsp;</p>
<p style="text-align: center;"><strong>ĐƠN XIN NGHỈ PH&Eacute;P</strong></p>
<table width="673">
<tbody>
<tr>
<td width="145">
<p>K&iacute;nh gửi:</p>
</td>
<td width="528">
<p>- Ban Gi&aacute;m đốc C&ocirc;ng ty CP Giải Ph&aacute;p C&ocirc;ng Nghệ GD Việt Nam;</p>
<p>- Ph&ograve;ng H&agrave;nh Ch&iacute;nh Kế To&aacute;n;</p>
<p>- Ph&ograve;ng Kỹ thuật;</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>T&ocirc;i t&ecirc;n l&agrave;: Trương Ph&uacute;c Vĩnh</p>
<p>Chức vụ: Nh&acirc;n vi&ecirc;n</p>
<p>T&ocirc;i viết đơn n&agrave;y k&iacute;nh mong BGĐ cho t&ocirc;i nghỉ ng&agrave;y thứ Tư (13/03/2024).</p>
<p>L&yacute; do: Bị bệnh, sức khoẻ kh&ocirc;ng đảm bảo để thực hiện c&ocirc;ng việc.</p>
<p>T&ocirc;i sẽ sắp xếp c&ocirc;ng việc trước v&agrave; sau khi nghỉ ph&eacute;p để kh&ocirc;ng ảnh hưởng tới c&ocirc;ng việc chung của c&ocirc;ng ty.</p>
<p>K&iacute;nh mong BGĐ chấp nhận.</p>
<p>T&ocirc;i xin ch&acirc;n th&agrave;nh cảm ơn!</p>
<p>&nbsp;</p>
<table>
<tbody>
<tr>
<td width="164">
<p>Gi&aacute;m Đốc</p>
<p><em>(K&yacute;, ghi r&otilde; họ t&ecirc;n)</em></p>
</td>
<td width="164">
<p>H&agrave;nh ch&iacute;nh</p>
<p><em>(K&yacute;, ghi r&otilde; họ t&ecirc;n)</em></p>
</td>
<td width="164">
<p>Trưởng bộ phận</p>
<p><em>(K&yacute;, ghi r&otilde; họ t&ecirc;n)</em></p>
</td>
<td width="164">
<p>Người đề nghị</p>
<p><em>(K&yacute;, ghi r&otilde; họ t&ecirc;n)</em></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>&nbsp; &nbsp;&nbsp;</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p><strong>&nbsp;</strong></p>

  `;

export const tabLabel = { 'aria-label': 'Tab' };
