from flask import Blueprint, render_template

index = Blueprint('index', __name__)

from . import views

