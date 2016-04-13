# pylint: disable=C,F
from pyramid.config import Configurator
import os
import mimetypes

from pyramid.session import SignedCookieSessionFactory
my_session_factory = SignedCookieSessionFactory('itsaseekreet')


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    here = os.path.abspath(os.path.dirname(__file__))
    # mimetypes.add_type('application/x-font-woff', '.woff')
    settings['mako.directories'] = os.path.join(here, 'templates')
    config = Configurator(settings=settings)
    config.include('pyramid_mako')
    config.include('pyramid_scss')
    config.add_route('css', 'static/css/{css_path:[^\.]*}.css')
    config.add_view(route_name='css', view='pyramid_scss.controller.get_scss', renderer='scss', request_method='GET')
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.set_session_factory(my_session_factory)

    # Define all routes
    config.add_route('home', '/')

    # Client Routes
    config.add_route('apiGetTokenForUser', 'api/getToken', request_method='POST')
    config.add_route('apiAuthorize', 'api/authorize', request_method='POST')

    # Book routes
    config.add_route('apiGetBook', 'api/book/{isbn}', request_method='GET')

    # Views
    config.add_route('gotoBook', 'gotoBook', request_method='GET')
    config.add_route('book', 'book/{isbn}', request_method='GET')

    config.scan()
    return config.make_wsgi_app()
