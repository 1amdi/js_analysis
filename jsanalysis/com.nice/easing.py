#!/usr/bin/env python  
# -*- encoding: utf-8 -*-  

""" 
@author: niu
@software: PyCharm
@file: easing.py 
@time: 2019/03/16 13:15 
"""
import numpy as np

def ease_out_quad(x):
    
    return 1 - (1 - x) * (1 - x)

def ease_out_quart(x):
    
    return 1 - pow(1 - x, 4)

def ease_out_expo(x):
    
    if x == 1:
        return 1
    else:
        return 1 - pow(2, -10 * x)

def get_tracks(distance, seconds, ease_func='ease_out_expo'):
    '''
    :param distance: 距离
    :param seconds: 调节滑动速度，效果自测
    :param ease_func: 固定的 'ease_out_expo'
    :return:
    '''
    tracks = [0]
    offsets = [0]
    # 0.08 调节速度
    for t in np.arange(0.0, seconds, 0.08):
        ease = globals()[ease_func]
        offset = round(ease(t / seconds) * distance)
        tracks.append(offset - offsets[-1])
        offsets.append(offset)
    return offsets, tracks
