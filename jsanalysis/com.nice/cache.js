def match_img_matrix(img_gray,template):
w, h = template.shape[:2]
res = cv2.matchTemplate(img_gray,template,cv2.TM_CCOEFF_NORMED)
#寻找矩阵中的最小值，最大值位置
min_val,max_val,min_loc,max_loc = cv2.minMaxLoc(res)
tl = max_loc
br = (tl[0]+w,tl[1]+h)
cv2.rectangle(template,tl,br,(0,0,255),2)
cv2.imwrite('res.png',template)
print(tl[0])
return tl[0]

